// 用户名判断
document.addEventListener('DOMContentLoaded', function() {
    const usernameInputs = document.querySelectorAll('.form_input[placeholder="用户名"]');
    
    usernameInputs.forEach(usernameInput => {
        usernameInput.addEventListener('blur', validateUsername);
    });

    function validateUsername(event) {
        const username = event.target.value;
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';

        if (username.trim() === '') {
            errorMessage.textContent = '用户名不能为空';
            event.target.parentNode.insertBefore(errorMessage, event.target.nextElementSibling);
        } else if (username.length < 2) {
            errorMessage.textContent = '用户名至少需要2个字符';
            event.target.parentNode.insertBefore(errorMessage, event.target.nextElementSibling);
        } else {
            const existingError = event.target.nextElementSibling;
            if (existingError && existingError.classList.contains('error-message')) {
                existingError.remove();
            }
        }
    }
});
