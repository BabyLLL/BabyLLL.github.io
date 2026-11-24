export default {
  name: 'BabyLLL',
  // 64×64 PNG, 4px arms, ≤ 18000 bytes. docs/avatar.md
  skin: 'assets/skins/babylll.png?v=2',
  languages: ['zh', 'en'],
  // weather: { city: '上海', cityEn: 'Shanghai', latitude: 31.23, longitude: 121.47, timezone: 'Asia/Shanghai' },
  weather: null,
  dock: ['blog', 'about', 'works', 'court', 'mailbox', 'phone'],
  mailbox: { endpoint: '', email: '', turnstileSitekey: '' },
  badge: true,
};
