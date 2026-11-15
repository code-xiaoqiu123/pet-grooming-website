// 留言表单验证和交互功能

// 表单验证规则
const validationRules = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 20,
        message: '请输入2-20个字符的姓名'
    },
    phone: {
        required: true,
        pattern: /^1[3-9]\d{9}$/,
        message: '请输入正确的手机号码'
    },
    serviceType: {
        required: true,
        message: '请选择咨询类型'
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 500,
        message: '留言内容至少10个字符，最多500个字符'
    }
};

// 获取表单元素
const form = document.getElementById('message-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const serviceTypeSelect = document.getElementById('service-type');
const packageSelect = document.getElementById('package');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('char-count');
const successModal = document.getElementById('success-modal');

// 设置日期选择器的最小日期为今天
const dateInput = document.getElementById('appointment-date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// 字符计数
if (messageInput && charCount) {
    messageInput.addEventListener('input', function() {
        const count = this.value.length;
        charCount.textContent = count;
        if (count > 500) {
            this.value = this.value.substring(0, 500);
            charCount.textContent = 500;
        }
    });
}

// 验证单个字段
function validateField(field, rules) {
    const value = field.value.trim();
    const errorElement = document.getElementById(`${field.id}-error`);
    
    if (!errorElement) return true;

    // 必填验证
    if (rules.required && !value) {
        showError(field, errorElement, '此项为必填项');
        return false;
    }

    // 最小长度验证
    if (rules.minLength && value.length < rules.minLength) {
        showError(field, errorElement, rules.message);
        return false;
    }

    // 最大长度验证
    if (rules.maxLength && value.length > rules.maxLength) {
        showError(field, errorElement, rules.message);
        return false;
    }

    // 正则验证
    if (rules.pattern && !rules.pattern.test(value)) {
        showError(field, errorElement, rules.message);
        return false;
    }

    // 验证通过
    clearError(field, errorElement);
    return true;
}

// 显示错误
function showError(field, errorElement, message) {
    field.classList.add('error');
    errorElement.textContent = message;
}

// 清除错误
function clearError(field, errorElement) {
    field.classList.remove('error');
    errorElement.textContent = '';
}

// 实时验证
if (nameInput) {
    nameInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            validateField(this, validationRules.name);
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            validateField(this, validationRules.phone);
        }
    });
}

if (serviceTypeSelect) {
    serviceTypeSelect.addEventListener('change', function() {
        validateField(this, validationRules.serviceType);
    });
}

if (messageInput) {
    messageInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            validateField(this, validationRules.message);
        }
    });
}

// 表单提交
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 验证所有字段
        let isValid = true;

        if (!validateField(nameInput, validationRules.name)) {
            isValid = false;
        }

        if (!validateField(phoneInput, validationRules.phone)) {
            isValid = false;
        }

        if (!validateField(serviceTypeSelect, validationRules.serviceType)) {
            isValid = false;
        }

        if (!validateField(messageInput, validationRules.message)) {
            isValid = false;
        }

        if (!isValid) {
            // 滚动到第一个错误字段
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }

        // 显示加载状态
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;

        // 模拟提交（实际项目中替换为真实的API调用）
        setTimeout(function() {
            // 恢复按钮状态
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;

            // 显示成功弹窗
            successModal.classList.add('show');

            // 重置表单
            form.reset();
            charCount.textContent = '0';
        }, 1500);
    });
}

// 关闭弹窗
function closeModal() {
    successModal.classList.remove('show');
}

// 点击遮罩关闭弹窗
if (successModal) {
    successModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// FAQ手风琴效果
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        
        // 关闭所有FAQ
        faqItems.forEach(function(faq) {
            faq.classList.remove('active');
        });

        // 如果当前不是激活状态，则打开
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// URL参数处理 - 自动选择套餐
const urlParams = new URLSearchParams(window.location.search);
const packageParam = urlParams.get('package');
const serviceParam = urlParams.get('service');

const packageNotice = document.getElementById('package-notice');
const selectedPackageName = document.getElementById('selected-package-name');

const packageNames = {
    basic: '基础套餐 - ¥68',
    standard: '标准套餐 - ¥128',
    premium: '尊享套餐 - ¥198'
};

if (packageParam && packageSelect) {
    packageSelect.value = packageParam;
    if (packageNames[packageParam] && packageNotice && selectedPackageName) {
        selectedPackageName.textContent = packageNames[packageParam];
        packageNotice.classList.add('show');
    }
}

if (serviceParam && serviceTypeSelect) {
    serviceTypeSelect.value = serviceParam;
}

// 关闭套餐提示
function closePackageNotice() {
    packageNotice.classList.remove('show');
}
