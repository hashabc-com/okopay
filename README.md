# OkoPay - Global Payment Website

一个专业的跨境支付网站，使用 Next.js 14、TypeScript 和 Tailwind CSS 构建。

## 🚀 功能特性

- ✅ **中英文双语切换** - 完整的国际化支持
- ✅ **响应式设计** - 完美适配桌面端、平板和移动设备
- ✅ **现代化 UI** - Glassmorphism + Flat Design 风格
- ✅ **性能优化** - Next.js 14 App Router 与 Turbopack
- ✅ **TypeScript** - 类型安全
- ✅ **无障碍访问** - 符合 WCAG 标准

## 🎨 设计系统

### 配色方案
- **主色调**: 金色 (#F59E0B) - 代表价值与信任
- **辅助色**: 紫色 (#8B5CF6) - 代表创新与科技
- **深色背景**: (#0F172A)

### 字体
- **标题**: Space Grotesk - 现代科技感
- **正文**: DM Sans - 清晰易读

### UI 风格
基于 Fintech 产品最佳实践设计:
- Glassmorphism 毛玻璃效果
- 流畅的动画过渡
- 高对比度确保可读性
- 银行级安全视觉传达

## 📁 项目结构

```
okopay-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 主页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Navbar.tsx         # 导航栏
│   ├── Hero.tsx           # 英雄区
│   ├── Features.tsx       # 功能特性
│   ├── HowItWorks.tsx     # 使用流程
│   ├── Testimonials.tsx   # 用户评价
│   ├── CTA.tsx            # 行动号召
│   └── Footer.tsx         # 页脚
├── i18n/                  # 国际化
│   ├── i18n-context.tsx   # i18n Context
│   └── locales/           # 语言文件
│       ├── en.json        # 英文
│       └── zh.json        # 中文
├── public/                # 静态资源
├── tailwind.config.ts     # Tailwind 配置
└── package.json
```

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: Google Fonts (DM Sans, Space Grotesk)
- **包管理**: npm

## 📦 安装与运行

### 安装依赖

```bash
cd okopay-website
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 生产构建

```bash
npm run build
npm start
```

### 代码检查

```bash
npm run lint
```

## 🌐 国际化

项目支持中英文切换，语言文件位于 `i18n/locales/` 目录:

- `en.json` - 英文翻译
- `zh.json` - 中文翻译

添加新语言:
1. 在 `i18n/locales/` 创建新的 JSON 文件
2. 在 `i18n/i18n-context.tsx` 添加语言配置
3. 更新语言切换按钮

## 📱 页面组件

### Navbar (导航栏)
- 浮动毛玻璃效果
- 中英文切换按钮
- 响应式移动菜单
- CTA 按钮

### Hero (英雄区)
- 渐变背景动画
- 交互式转账演示卡片
- 双语标题和描述
- 主次 CTA 按钮

### Features (功能特性)
- 6 个核心功能展示
- 图标 + 标题 + 描述
- 悬停动画效果
- 统计数据展示

### HowItWorks (使用流程)
- 3 步流程说明
- 连接线视觉引导
- 步骤编号标记
- 清晰的行动号召

### Testimonials (用户评价)
- 用户头像和评分
- 真实评价展示
- 3 列网格布局
- 社会证明

### CTA (行动号召)
- 渐变背景
- Email 注册表单
- 信任标识
- 高对比度设计

### Footer (页脚)
- 多列链接导航
- 社交媒体图标
- 品牌信息
- 版权声明

## 🎯 设计原则

### 1. 性能优化
- 使用 Next.js Image 组件
- 代码分割和懒加载
- 字体预加载
- CSS 动画硬件加速

### 2. 用户体验
- 流畅的动画过渡 (150-300ms)
- 清晰的视觉层次
- 高对比度文本 (4.5:1+)
- 响应式触摸目标 (44x44px+)

### 3. 可访问性
- 语义化 HTML
- 键盘导航支持
- ARIA 标签
- 色彩对比度符合 WCAG AA

### 4. SEO 优化
- 语义化页面结构
- Meta 标签配置
- OpenGraph 支持
- 清晰的 URL 结构

## 🚀 部署

### Vercel (推荐)

```bash
# 使用 Vercel CLI
npm i -g vercel
vercel
```

或直接连接 GitHub 仓库到 Vercel

### 其他平台

构建生产版本:
```bash
npm run build
```

输出目录: `.next/`

## 📝 自定义

### 修改配色

编辑 `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#F59E0B', // 修改主色调
    // ...
  },
}
```

### 添加新页面

1. 在 `app/` 创建新目录
2. 添加 `page.tsx`
3. 更新导航链接

### 修改翻译

编辑 `i18n/locales/en.json` 和 `zh.json`

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Pull Request!

## 📧 联系

如有问题，请联系项目维护者。

---

**Built with ❤️ using Next.js & Tailwind CSS**
