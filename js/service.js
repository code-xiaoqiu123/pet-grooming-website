// 服务介绍页面交互功能

// 标签筛选功能
const tabBtns = document.querySelectorAll('.tab-btn');
const serviceItems = document.querySelectorAll('.service-item');

tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const tab = this.dataset.tab;

        // 更新激活状态
        tabBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        this.classList.add('active');

        // 筛选服务
        serviceItems.forEach(function(item) {
            if (tab === 'all' || item.dataset.category === tab) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
