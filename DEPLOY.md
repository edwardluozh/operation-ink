# Cloudflare Pages 部署说明

本项目已配置为可直接部署到 Cloudflare Pages。

## 构建设置

1. **构建命令**: `npm ci && npm run build`
2. **构建输出目录**: `dist`
3. **Node.js 版本**: 18 或更高

## 方法一：使用 Wrangler CLI

### 部署到新项目（推荐）

```bash
# 安装 Wrangler（如果尚未安装）
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
npm ci && npm run build

# 部署到新项目 operation-ink
wrangler pages deploy dist --project-name=operation-ink
```

部署成功后，项目将可通过 `https://operation-ink.pages.dev` 访问。

### 覆盖现有项目（ballpoint-breach）

如果你想替换现有的 Ballpoint Breach 网站：

```bash
npm ci && npm run build
wrangler pages deploy dist --project-name=ballpoint-breach
```

这将使用新的 Operation Safe Return 游戏覆盖 `https://ballpoint-breach.pages.dev`。

## 方法二：通过 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
3. 授权并选择 `edwardluozh/operation-ink` 仓库
4. 配置构建设置：
   - **Framework preset**: 无（None）
   - **Build command**: `npm ci && npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
5. 点击 **Save and Deploy**

## 缓存优化

项目包含 `public/_headers` 文件，为静态资源配置了缓存策略：

- `/assets/*` - 1 年缓存（带版本哈希的资源）
- `/sounds/*` - 1 年缓存
- `/models/*` - 1 年缓存

这些设置会自动应用到 Cloudflare Pages 部署中。

## SPA 路由

项目包含两个独立的 HTML 文件：
- `index.html` - 主游戏页面
- `lab.html` - 角色实验室

两者都是独立的静态页面，无需额外的路由配置。

## 环境要求

- 静态构建，无服务器端要求
- 纯客户端渲染
- 无环境变量依赖

## 验证部署

部署完成后，访问以下页面验证：

1. 主页 `/` - 应加载游戏并显示中文界面
2. 角色实验室 `/lab.html` - 应加载 3D 角色查看器
3. 检查浏览器控制台，确认无 404 错误（特别是音频文件）

## 故障排除

### 构建失败

- 确保 Node.js 版本 ≥ 18
- 运行 `npm ci` 而非 `npm install` 以获得可重现的构建
- 检查 TypeScript 错误: `npm run build`

### 音频文件 404

- 确认 `public/sounds/igi/` 目录已被删除
- 检查 `src/game/igi-samples.ts` 中 IGI_SAMPLES 为空对象
- 游戏应使用 CC0 音效作为后备

### 性能问题

- 所有资源都应从 Cloudflare CDN 提供
- 检查 Network 标签中的缓存头
- 3D 模型和纹理已优化
