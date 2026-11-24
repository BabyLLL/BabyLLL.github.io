# BabyLLL's World

一个 Minecraft 风格的 3D 个人主页,复刻自 [terryHu7/homecraft](https://github.com/terryHu7/homecraft)(MIT License),基于 **Vue 3 + Vite**。

逛一圈就像去朋友家做客:用 WASD 走动,靠近门口按 E 打开页面,有昼夜交替、天气系统和留言信箱。

## 开发

```bash
npm install
npm run dev        # 开发服务器 http://localhost:5173,自动打开浏览器
```

## 构建与部署

```bash
npm run build      # 产物输出到 dist/
npm run preview    # 本地预览构建产物
```

push 到 main 后 GitHub Actions 会自动构建并发布到 GitHub Pages(见 `.github/workflows/deploy.yml`)。

## 项目结构

- `src/App.vue` — 应用外壳:canvas 容器、加载屏;引擎在 `onMounted` 里挂载
- `src/components/SitePages.vue` — 所有文字页面(关于我 / 主页 / 联系方式 / 留言),中英双语
- `home.config.js` — 站点设置:名字、皮肤、语言、dock 栏、实时天气城市
- `world/layout.js` — 世界布局:岛屿范围、出生点、站点位置、树木
- `engine/` — 3D 引擎(来自原项目,未改动:地形、光照、天气、头像、传送门、HUD)
- `public/` — 运行时静态文件(homecraft.json、分享图 og.jpg、皮肤模板)

引擎是命令式 Three.js 代码,通过固定 ID(`#world`、`#loading`、`#pages` 等)与 Vue 模板衔接;Vue 模板保持静态,引擎负责动态 DOM。修改页面内容请编辑 `src/components/SitePages.vue` 和 `home.config.js`。

原项目文档见:[terryHu7/homecraft](https://github.com/terryHu7/homecraft)。

## License

MIT(继承自原项目)
