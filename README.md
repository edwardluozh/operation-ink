# 安全返回行动 / Operation Safe Return (Chinese Edition)

基于 [byteab/operation-ink](https://github.com/byteab/operation-ink) 的简体中文移植版本，面向 Cloudflare Pages 部署。

浏览器端第一人称人质营救游戏，纸墨风格。找到人质并一起逃离。使用 TypeScript、Three.js、Preact 和 Vite 构建。

## 快速开始

```sh
npm install
npm run dev
```

打开本地 Vite URL 并选择**开始任务**。控制说明在游戏菜单中。角色实验室在 `/lab.html`。

- `npm run build` — 类型检查并构建生产版本
- `npm test` — 运行所有逻辑检查

## 部署

查看 [DEPLOY.md](DEPLOY.md) 了解 Cloudflare Pages 部署说明。

## 授权

- **源代码**: [MIT License](LICENSE)（继承自上游项目）
- **音频**: 详见 [音效来源说明](public/sounds/CREDITS.md)

**重要变更**：本项目已移除所有 Project I.G.I. 音频文件（`igi/` 文件夹），因为这些资源未获得原游戏之外的重新使用授权。游戏现在完全使用 CC0/CC BY 授权的音效和 Web Audio 程序化音频。

## 中文本地化

本项目已将所有面向玩家的 UI 文本翻译为简体中文，包括：
- 菜单界面和导航
- 任务简报和目标
- HUD 和控制提示
- 胜利/失败画面
- 字幕和提示信息

本地化实现在 `src/i18n.ts` 中，代码标识符保持英文。

## 上游项目

- 原始项目: https://github.com/byteab/operation-ink
- 在线演示: https://operation-ink.vercel.app
- 版权所有 © 2026 Ehsan Sarshar
- MIT 授权

## 技术栈

- TypeScript
- Three.js (3D 渲染)
- Preact (UI 组件)
- Vite (构建工具)

## 开发说明

关于代码结构和测试的详细信息，请参考上游项目的 [AGENTS.md](AGENTS.md)。

## Gameplay

https://github.com/user-attachments/assets/d397e167-213b-419d-9b45-5d0fcb534e4e



https://github.com/user-attachments/assets/72868325-db6f-4837-80ec-334a9c56af82








