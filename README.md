# 🐾 萌宠美容网站

一个专为宠物美容店设计的展示型网站，提供**服务介绍、服务详情、门店信息、留言咨询**四大核心功能，帮助宠物店向客户展示服务内容并提供便捷的在线咨询预约入口。

> 🌐 **在线访问**：[https://code-xiaoqiu123.github.io/pet-grooming-website/](https://code-xiaoqiu123.github.io/pet-grooming-website/)

## ✨ 功能特性

### 🏠 首页（index.html）
- 自动轮播图（4 秒切换，支持左右箭头、指示点点击、悬停暂停）
- 服务项目速览
- 优势展示与门店入口

### 🛁 服务介绍（service.html）
- 服务分类标签筛选（全部 / 洗澡 / 造型 / SPA / 指甲）
- 服务项目卡片，带价格与特色说明

### 📋 服务详情（service-detail.html）
- 根据 URL 参数动态渲染对应服务（`?type=bath` / `styling` / `spa` / `nail`）
- 服务图片缩略图切换
- 三档套餐对比（基础 / 标准 / 尊享），标出人气推荐
- 一键跳转留言页预约

### 🏪 门店信息（store.html）
- 门店地址、营业时间、联系方式
- 交通指引

### 💬 留言咨询（message.html）
- 完整的表单验证（姓名、手机号正则、咨询类型、留言字数限制）
- 留言实时字数统计
- 预约日期限制（不可早于今天）
- URL 参数自动预选套餐（`?package=standard`）
- 提交成功弹窗与 FAQ 手风琴

### 📱 其他
- 全站响应式布局（桌面 / 平板 / 手机）
- 移动端汉堡导航菜单

## 🛠 技术栈

- **HTML5** — 语义化结构
- **CSS3** — CSS 变量、Flex / Grid 布局、渐变与过渡动画
- **原生 JavaScript** — 无任何框架依赖，开箱即用

## 📁 项目结构

```
pet-grooming-website/
├── index.html            # 首页
├── service.html          # 服务介绍页
├── service-detail.html   # 服务详情页（动态渲染）
├── store.html            # 门店信息页
├── message.html          # 留言咨询/预约页
├── css/
│   ├── style.css         # 全局样式（CSS 变量、导航、通用组件）
│   ├── responsive.css    # 响应式样式（平板/手机断点）
│   ├── service.css       # 服务介绍页样式
│   ├── service-detail.css# 服务详情页样式
│   ├── store.css         # 门店信息页样式
│   └── message.css       # 留言咨询页样式
├── js/
│   ├── main.js           # 全局脚本（导航交互）
│   ├── carousel.js       # 首页轮播图
│   ├── service.js        # 服务标签筛选
│   ├── service-detail.js # 服务详情数据渲染
│   └── form.js           # 表单验证、提交与 FAQ 交互
└── images/               # 图片资源（banner、服务图、图标）
```

## 🚀 本地运行

无需构建，直接用浏览器打开 `index.html` 即可；或启动任意静态服务器：

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

然后访问 `http://localhost:8080`。

## 📦 部署

本项目通过 **GitHub Pages** 自动部署：推送到 `main` 分支后，站点会在 1~2 分钟内自动更新。

线上地址：https://code-xiaoqiu123.github.io/pet-grooming-website/

## 📝 说明

- 留言表单目前为**前端模拟提交**（演示用途），接入后端时替换 `js/form.js` 中标记的 `setTimeout` 模拟段为真实 API 调用即可
- 页面中的服务价格、门店信息为演示数据，可按实际业务修改
