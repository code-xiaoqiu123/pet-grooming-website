// 服务详情页交互功能

// 服务数据
const serviceData = {
    bath: {
        title: '宠物洗澡',
        price: '¥68起',
        originalPrice: '¥98',
        desc: '温和洗护，深层清洁，让宠物焕然一新。我们使用专业宠物洗护产品，确保宠物的皮肤和毛发健康。',
        duration: '约60分钟',
        images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'],
        features: [
            '使用进口天然洗护产品',
            '专业美容师一对一服务',
            '全程温柔安抚，宠物更安心',
            '洗护后免费吹干造型'
        ],
        packages: [
            {
                name: '基础套餐',
                price: '¥68',
                features: ['全身洗澡', '基础吹干', '耳朵清洁', '肛门腺清理'],
                popular: false
            },
            {
                name: '标准套餐',
                price: '¥128',
                features: ['全身洗澡', '专业吹干造型', '耳朵清洁', '肛门腺清理', '指甲修剪', '脚底毛修剪'],
                popular: true
            },
            {
                name: '尊享套餐',
                price: '¥198',
                features: ['全身洗澡', '专业吹干造型', '耳朵清洁', '肛门腺清理', '指甲修剪', '脚底毛修剪', 'SPA精油护理', '牙齿清洁'],
                popular: false
            }
        ]
    },
    styling: {
        title: '造型修剪',
        price: '¥128起',
        originalPrice: '¥168',
        desc: '专业造型设计，打造萌宠专属风格。根据宠物品种特点和主人需求，量身定制最适合的造型方案。',
        duration: '约90分钟',
        images: ['images/2.jpg', 'images/1.jpg', 'images/4.jpg', 'images/3.jpg'],
        features: [
            '专业造型师精心设计',
            '根据品种特点定制造型',
            '使用专业修剪工具',
            '修剪后免费护理'
        ],
        packages: [
            {
                name: '基础修剪',
                price: '¥128',
                features: ['全身修剪', '基础造型', '耳朵修剪', '脚底毛修剪'],
                popular: false
            },
            {
                name: '精致造型',
                price: '¥198',
                features: ['全身修剪', '精致造型设计', '耳朵修剪', '脚底毛修剪', '指甲修剪', 'SPA护理'],
                popular: true
            },
            {
                name: '赛级造型',
                price: '¥298',
                features: ['全身修剪', '赛级造型设计', '耳朵修剪', '脚底毛修剪', '指甲修剪', 'SPA护理', '牙齿清洁', '染色服务'],
                popular: false
            }
        ]
    },
    spa: {
        title: 'SPA护理',
        price: '¥168起',
        originalPrice: '¥228',
        desc: '深层滋养护理，呵护宠物皮毛健康。采用天然精油和专业护理产品，让宠物享受全方位的放松体验。',
        duration: '约120分钟',
        images: ['images/3.jpg', 'images/1.jpg', 'images/2.jpg', 'images/4.jpg'],
        features: [
            '天然精油深层滋养',
            '专业按摩手法放松',
            '皮毛护理修复',
            '舒缓压力改善睡眠'
        ],
        packages: [
            {
                name: '基础SPA',
                price: '¥168',
                features: ['精油沐浴', '基础按摩', '皮毛护理', '耳朵清洁'],
                popular: false
            },
            {
                name: '深度SPA',
                price: '¥268',
                features: ['精油沐浴', '深度按摩', '皮毛护理', '耳朵清洁', '指甲修剪', '脚底护理'],
                popular: true
            },
            {
                name: '尊享SPA',
                price: '¥368',
                features: ['精油沐浴', '全身按摩', '皮毛护理', '耳朵清洁', '指甲修剪', '脚底护理', '牙齿清洁', '香薰放松'],
                popular: false
            }
        ]
    },
    nail: {
        title: '指甲修剪',
        price: '¥38起',
        originalPrice: '¥58',
        desc: '精细修剪，保护宠物行走健康。定期修剪指甲可以防止宠物抓伤家具和自己，保持行走舒适。',
        duration: '约20分钟',
        images: ['images/4.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
        features: [
            '专业修剪工具',
            '温柔操作不伤宠物',
            '修剪后打磨光滑',
            '检查指甲健康状况'
        ],
        packages: [
            {
                name: '基础修剪',
                price: '¥38',
                features: ['指甲修剪', '基础打磨', '指甲检查'],
                popular: false
            },
            {
                name: '精致修剪',
                price: '¥68',
                features: ['指甲修剪', '精细打磨', '指甲检查', '脚底毛修剪', '脚掌护理'],
                popular: true
            },
            {
                name: '全面护理',
                price: '¥98',
                features: ['指甲修剪', '精细打磨', '指甲检查', '脚底毛修剪', '脚掌护理', '耳朵清洁', 'SPA足浴'],
                popular: false
            }
        ]
    }
};

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 初始化页面
function initPage() {
    const serviceType = getUrlParam('type') || 'bath';
    const service = serviceData[serviceType];

    if (!service) {
        window.location.href = 'service.html';
        return;
    }

    // 更新页面内容
    document.getElementById('service-title').textContent = service.title;
    document.getElementById('breadcrumb-service').textContent = service.title;
    document.getElementById('service-price').textContent = service.price;
    document.getElementById('service-desc').textContent = service.desc;
    document.getElementById('service-duration').textContent = service.duration;

    // 更新主图
    document.getElementById('main-service-image').src = service.images[0];

    // 更新缩略图
    const thumbnailList = document.getElementById('thumbnail-list');
    thumbnailList.innerHTML = '';
    service.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = `缩略图${index + 1}`;
        thumb.className = index === 0 ? 'thumb active' : 'thumb';
        thumb.dataset.index = index;
        thumb.addEventListener('click', function() {
            switchImage(this);
        });
        thumbnailList.appendChild(thumb);
    });

    // 更新服务特色
    const featuresList = document.getElementById('service-features-list');
    featuresList.innerHTML = '';
    service.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // 更新套餐
    const packagesGrid = document.getElementById('packages-grid');
    packagesGrid.innerHTML = '';
    service.packages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = `package-card${pkg.popular ? ' popular' : ''}`;
        
        let featuresHtml = '';
        pkg.features.forEach(f => {
            featuresHtml += `<li>${f}</li>`;
        });

        card.innerHTML = `
            ${pkg.popular ? '<div class="popular-tag">人气推荐</div>' : ''}
            <div class="package-header">
                <h3>${pkg.name}</h3>
                <span class="package-price">${pkg.price}</span>
            </div>
            <ul class="package-features">
                ${featuresHtml}
            </ul>
            <a href="message.html" class="btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}">选择此套餐</a>
        `;
        packagesGrid.appendChild(card);
    });

    // 更新页面标题
    document.title = `${service.title} - 萌宠美容`;
}

// 切换图片
function switchImage(thumb) {
    const mainImage = document.getElementById('main-service-image');
    mainImage.src = thumb.src;

    // 更新激活状态
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);
