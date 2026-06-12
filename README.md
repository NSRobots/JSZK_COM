# JSZK 官方网站

基于 [Astro](https://astro.build/) 构建的静态站点项目，为 JSZK 提供信息展示与内容发布能力。

---

## 技术栈

| 技术 | 版本 | 说明 |
| :--- | :--- | :--- |
| Astro | ^6.3.1 | 静态站点生成框架 |
| Tailwind CSS | ^4.3.0 | 原子化 CSS 工具类 |
| Node.js | >=22.12.0 | 运行时环境 |

---

## 项目结构

```
src/
├── components/       # 可复用组件（按钮、弹窗、头部、底部等）
├── content/blogs/    # Markdown 博客内容集合
├── data/             # 页面数据与配置
├── layouts/          # 页面布局模板
├── pages/            # 路由页面（含动态路由 [tag].astro、[...page].astro）
└── styles/           # 全局样式
public/               # 静态资源（图片、图标等）
```

---

## 快速开始

```bash
# 安装依赖
npm install

# 启动本地开发服务器（默认 http://localhost:4321）
npm run dev

# 构建生产版本（输出至 ./dist/）
npm run build

# 本地预览构建结果
npm run preview
```

---

## 主要功能

- **多页面路由**：支持首页、二级页面及动态标签页
- **博客系统**：基于 Astro Content Collections，使用 Markdown 编写博客内容
- **组件化开发**：封装了通用按钮、模态弹窗、头部导航、底部信息等可复用组件
- **响应式布局**：支持多种屏幕尺寸适配

---

## 部署

项目使用 `wrangler` 进行部署（详见 `wrangler.jsonc` 配置）。

```bash
# 构建后部署
npm run build
```

---

> 如有问题或建议，欢迎提 Issue。
