// 注册密码验证
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('a-form').addEventListener('submit', function(event) {
        var password = document.querySelector('#a-form input[placeholder="密码"]');
        var confirmPassword = document.querySelector('#a-form input[placeholder="确认密码"]');
        
        // 检查密码是否至少6位
        if (password.value.length < 6) {
            alert('密码至少需要6位字符！');
            event.preventDefault(); // 阻止表单提交
            return;
        }
        
        // 检查两次输入的密码是否一致
        if (password.value !== confirmPassword.value) {
            alert('两次输入的密码不一致！');
            event.preventDefault(); // 阻止表单提交
        }
    });
});