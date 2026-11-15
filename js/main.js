/**
 * main.js - 全局公共脚本
 *
 * 负责全站通用交互：导航栏的移动端开关与点击外部自动收起。
 * 所有页面均引入本文件（配合 css/style.css 中的 .nav-toggle / .nav-list 使用）。
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取汉堡按钮和导航菜单元素
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    // 仅在元素存在时绑定事件（避免非首页报错）
    if (navToggle && navList) {
        // 点击汉堡按钮：切换移动端菜单的展开/收起状态
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            this.classList.toggle('active');
        });

        // 点击菜单以外的区域时，自动收起菜单
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
});
