/**
 * carousel.js - 首页轮播图组件
 *
 * 功能：
 * 1. 轮播图自动播放（每 4 秒切换一张）
 * 2. 左右箭头手动切换
 * 3. 底部指示点点击跳转
 * 4. 鼠标悬停暂停自动播放，移出恢复
 *
 * 依赖结构：.hero-carousel > .carousel-slide / .carousel-prev / .carousel-next / .dot
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取轮播图相关元素
    const slides = document.querySelectorAll('.carousel-slide'); // 所有轮播项
    const dots = document.querySelectorAll('.dot');               // 底部指示点
    const prevBtn = document.querySelector('.carousel-prev');     // 上一张按钮
    const nextBtn = document.querySelector('.carousel-next');     // 下一张按钮
    let currentIndex = 0;      // 当前显示的幻灯片索引
    let autoPlayInterval = null; // 自动播放定时器

    /**
     * 显示指定索引的幻灯片
     * 先移除所有 active 状态，再为目标项添加 active
     * @param {number} index - 要显示的幻灯片索引
     */
    function showSlide(index) {
        slides.forEach(function(slide, i) {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    /** 切换到下一张（循环播放） */
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    /** 切换到上一张（循环播放） */
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    /** 启动自动播放：每 4 秒切换一次 */
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    /** 停止自动播放 */
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 点击"上一张"：手动切换后重置自动播放计时
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    // 点击"下一张"：手动切换后重置自动播放计时
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    // 点击底部指示点：直接跳转到对应幻灯片
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            currentIndex = index;
            showSlide(currentIndex);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // 鼠标悬停在轮播图上时暂停自动播放，移出后恢复
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // 页面加载后启动自动播放
    startAutoPlay();
});
