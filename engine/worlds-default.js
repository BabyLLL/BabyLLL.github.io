// A fresh clone can discover its first destination without a directory
// service. When available, the remote directory's moderation still wins.
export const DEFAULT_WORLDS = [{
  name: "Terry's Home", url: 'https://terryhu.cn/', owner: 'Terry',
  lang: ['zh', 'en'], homecraft: true,
  intro: "Welcome! It's all good!",
  logo: new URL('./assets/terry-logo.png', import.meta.url).href,
}];
