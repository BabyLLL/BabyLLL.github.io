// A city's weather (home.config.js `weather`), fetched independently of world
// boot. Current conditions are Open-Meteo model estimates; refresh at most
// once per 30 minutes. Without a city there is nothing to fetch: Live weather
// stays clear, and Live time follows the visitor's own clock.
import { config } from './config.js';

export const WEATHER_CITY = config.weather || null;
export const WEATHER_URL = WEATHER_CITY && 'https://api.open-meteo.com/v1/forecast?' + new URLSearchParams({
  latitude: WEATHER_CITY.latitude, longitude: WEATHER_CITY.longitude, timezone: WEATHER_CITY.timezone,
  current: 'temperature_2m,weather_code,rain,showers,cloud_cover,wind_speed_10m', timeformat: 'unixtime', forecast_days: 1,
  daily: 'sunrise,sunset',
});
const KEY = WEATHER_CITY ? `homecraft-weather-${WEATHER_CITY.latitude},${WEATHER_CITY.longitude}-v1` : null;
const INTERVAL = 30 * 60 * 1000, MAX_AGE = 6 * 60 * 60 * 1000;
const finite = value => typeof value === 'number' && Number.isFinite(value);

export function weatherCondition(data) {
  const code = data.code;
  const snow = (code >= 71 && code <= 77) || code === 85 || code === 86;
  const thunder = code >= 95, fog = code === 45 || code === 48;
  const rain = !snow && (thunder || (code >= 51 && code <= 67) || (code >= 80 && code <= 82) || data.rain > 0);
  const overcast = rain || snow || fog || code === 3 || data.cloud >= 75;
  const kind = thunder ? 'thunder' : snow ? 'snow' : rain ? 'rain' : fog ? 'fog' : overcast ? 'overcast' : 'clear';
  const description = thunder ? ['雷暴', 'Thunderstorm'] : snow ? ['雪', 'Snow'] : rain ? ['雨', 'Rain'] : fog ? ['雾', 'Fog'] : code === 3 ? ['阴', 'Overcast'] : code === 2 ? ['多云', 'Cloudy'] : ['晴', 'Clear'];
  return { kind, rain, snow, thunder, description, overcast, params: weatherParams(data) };
}

// What the weather looks like is a few amounts from 0 to 1: cloud, rain, snow,
// fog, haze, wind and storm. Live data sets them from the cloud cover, the WMO
// code's intensity (drizzle, rain, showers, snow), the rain the model reports
// and the wind; so a drizzle and a downpour, or a few clouds and a grey deck,
// look different. The menu's previews are fixed points in the same space.
const clamp01 = v => Math.max(0, Math.min(1, v));
const FALLING = {
  51: ['rain', .25], 53: ['rain', .35], 55: ['rain', .45], 56: ['rain', .3], 57: ['rain', .45],
  61: ['rain', .45], 63: ['rain', .7], 65: ['rain', 1], 66: ['rain', .5], 67: ['rain', .9],
  80: ['rain', .55], 81: ['rain', .8], 82: ['rain', 1],
  71: ['snow', .4], 73: ['snow', .7], 75: ['snow', 1], 77: ['snow', .35], 85: ['snow', .6], 86: ['snow', 1],
};
export function weatherParams(data) {
  const code = data.code, wind = finite(data.wind) ? data.wind : 12;
  const p = { cloud: clamp01((data.cloud || 0) / 100), rain: 0, snow: 0, fog: 0, haze: 0, wind: clamp01(wind / 40), storm: 0 };
  const [kind, amount] = FALLING[code] || [];
  if (kind) p[kind] = amount;
  if (code >= 95) { p.rain = code === 95 ? .85 : 1; p.storm = 1; }
  if (code === 45 || code === 48) p.fog = 1;
  // Millimetres in the last hour can say more than the code.
  if (data.rain > 0 && !p.snow) p.rain = Math.max(p.rain, clamp01(.3 + data.rain / 6));
  if (p.rain || p.snow || p.fog || code === 3) p.cloud = Math.max(p.cloud, .97);
  else if (code === 2) p.cloud = Math.max(p.cloud, .5);
  return p;
}

export const WEATHER_PRESETS = {
  clear: { cloud: .22, wind: .2 },
  overcast: { cloud: 1, wind: .35 },
  rain: { cloud: 1, rain: .7, wind: .45 },
  fog: { cloud: .9, fog: 1, wind: .05 },
  haze: { cloud: .55, haze: 1, wind: .08 },
  snow: { cloud: 1, snow: .75, wind: .25 },
  thunder: { cloud: 1, rain: 1, storm: 1, wind: .8 },
};

// Words shown for the weather are [Chinese, English] pairs (lang.js t).
const city = WEATHER_CITY?.city || '', cityEn = WEATHER_CITY?.cityEn || city;
export const WEATHER_LABELS = { auto: city ? [`${city}实时`, `${cityEn}, live`] : ['晴天', 'Clear'], clear: ['晴天', 'Clear'], overcast: ['阴天', 'Overcast'], rain: ['下雨', 'Rain'], fog: ['薄雾', 'Mist'], haze: ['雾霾', 'Haze'], snow: ['下雪', 'Snow'], thunder: ['雷雨', 'Storm'] };
export const TIME_LABELS = { auto: city ? [`${city}时间`, `${cityEn} time`] : ['本地时间', 'Local time'], dawn: ['清晨', 'Dawn'], morning: ['上午', 'Morning'], day: ['白天', 'Day'], dusk: ['黄昏', 'Dusk'], night: ['夜晚', 'Night'] };
const zone = WEATHER_CITY?.timezone ? { timeZone: WEATHER_CITY.timezone } : {};
const cityDate = new Intl.DateTimeFormat('en-CA', { ...zone, year: 'numeric', month: '2-digit', day: '2-digit' });
const cityClock = new Intl.DateTimeFormat('en-GB', { ...zone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });

// Evaluated once per minute. Solar times move the dawn/dusk boundaries with
// the seasons; offline or old caches fall back to 06:00/18:00 in the city.
export function timeOfDay(date = new Date(), solar = null) {
  const minute = value => { const parts = cityClock.formatToParts(value); return Number(parts.find(p => p.type === 'hour').value) * 60 + Number(parts.find(p => p.type === 'minute').value); };
  let sunrise = 360, sunset = 1080;
  if (finite(solar?.sunrise) && finite(solar?.sunset)) {
    const rise = new Date(solar.sunrise * 1000), set = new Date(solar.sunset * 1000);
    if (cityDate.format(rise) === cityDate.format(date) && cityDate.format(set) === cityDate.format(date) && solar.sunset > solar.sunrise) {
      sunrise = minute(rise); sunset = minute(set);
    }
  }
  const now = minute(date);
  return now < sunrise - 45 || now >= sunset + 45 ? 'night' : now < sunrise + 45 ? 'dawn' : now < sunrise + 180 ? 'morning' : now < sunset - 60 ? 'day' : 'dusk';
}

function valid(data) {
  return data && ['temperature', 'code', 'rain', 'cloud', 'time', 'savedAt'].every(key => finite(data[key]))
    && data.code >= 0 && data.code <= 99 && data.temperature > -80 && data.temperature < 65;
}

export function createWeather({ onChange, fetcher = fetch, storage, now = Date.now } = {}) {
  if (!WEATHER_CITY) return {
    start() { onChange?.({ data: null, status: 'off', condition: null }); }, refresh() {}, dispose() {},
    get state() { return { data: null, status: 'off', condition: null }; },
  };
  if (!storage) try { storage = localStorage; } catch {}
  let data = null, lastAttempt = -Infinity, pending = null, timer;
  let status = 'loading';
  try {
    const cached = JSON.parse(storage?.getItem(KEY));
    if (valid(cached) && now() - cached.savedAt >= 0 && now() - cached.savedAt < MAX_AGE && Math.abs(now() - cached.time * 1000) < MAX_AGE) data = cached;
  } catch {}
  function emit(next) { status = next; onChange?.({ data, status, condition: data ? weatherCondition(data) : null }); }
  async function refresh() {
    if (pending) return pending;
    if (now() - lastAttempt < INTERVAL) return;
    if (data && now() - data.savedAt < INTERVAL && now() - data.time * 1000 < MAX_AGE) { lastAttempt = data.savedAt; emit('cached'); return; }
    lastAttempt = now();
    const abort = new AbortController();
    const timeout = setTimeout(() => abort.abort(), 8000);
    pending = (async () => {
      try {
        const response = await fetcher(WEATHER_URL, { signal: abort.signal, credentials: 'omit' });
        if (!response.ok) throw new Error('Weather response failed');
        const responseData = await response.json(), current = responseData.current;
        const next = { temperature: current?.temperature_2m, code: current?.weather_code,
          rain: current?.rain + current?.showers, cloud: current?.cloud_cover, time: current?.time, savedAt: now() };
        if (finite(current?.wind_speed_10m)) next.wind = current.wind_speed_10m;
        const sunrise = responseData.daily?.sunrise?.[0], sunset = responseData.daily?.sunset?.[0];
        if (finite(sunrise) && finite(sunset) && sunset > sunrise) Object.assign(next, { sunrise, sunset });
        if (!valid(next) || Math.abs(now() - next.time * 1000) > MAX_AGE) throw new Error('Weather data is stale or incomplete');
        data = next;
        try { storage?.setItem(KEY, JSON.stringify(data)); } catch {}
        emit('live');
      } catch {
        if (data && (now() - data.savedAt >= MAX_AGE || now() - data.time * 1000 >= MAX_AGE)) data = null;
        emit(data ? 'stale' : 'unavailable');
      } finally { clearTimeout(timeout); pending = null; }
    })();
    return pending;
  }
  const visible = () => { if (!document.hidden) refresh(); };
  return {
    start() {
      emit(data ? 'cached' : 'loading'); refresh();
      timer = setInterval(visible, INTERVAL); document.addEventListener('visibilitychange', visible);
    },
    refresh,
    dispose() { clearInterval(timer); document.removeEventListener('visibilitychange', visible); },
    get state() { return { data, status, condition: data ? weatherCondition(data) : null }; },
  };
}
