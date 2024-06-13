// 交互功能脚本
    window.addEventListener("load", () => {
        const switchCtn = document.querySelector("#switch-cnt");
        const switchC1 = document.querySelector("#switch-c1");
        const switchC2 = document.querySelector("#switch-c2");
        const switchCircle = document.querySelectorAll(".switch_circle");
        const switchBtn = document.querySelectorAll(".switch-btn");
        const aContainer = document.querySelector("#a-container");
        const bContainer = document.querySelector("#b-container");
        const allButtons = document.querySelectorAll(".submit");

        // 优化1: 事件处理函数命名更清晰
        const preventDefaultOnSubmit = (e) => e.preventDefault();
        const handleFormSwitch = (e) => {
            // 优化2: 使用requestAnimationFrame优化动画性能
            requestAnimationFrame(() => {
                switchCtn.classList.add("is-gx");
                setTimeout(() => {
                    switchCtn.classList.remove("is-gx");
                }, 1500);

                switchCtn.classList.toggle("is-txr");
                switchCircle.forEach((circle, index) => {
                    circle.classList.toggle(`is-txr-${index === 1 ? 't' : ''}`);
                });

                switchC1.classList.toggle("is-hidden");
                switchC2.classList.toggle("is-hidden");
                aContainer.classList.toggle("is-txl");
                bContainer.classList.toggle("is-txl");
                bContainer.classList.toggle("is-z");
            });
        };

        // 优化3: 使用事件委托优化按钮事件处理
        document.body.addEventListener("click", (event) => {
            if (event.target.matches('.submit')) {
                preventDefaultOnSubmit(event);
            }
            if (event.target.matches('.switch-btn')) {
                handleFormSwitch(event);
            }
        });

        // 安全性优化：为表单提交添加CSRF令牌（这里只是概念性展示，具体实现需结合后端）
        // document.querySelector('form').setAttribute('action', '/submit-with-csrf-token');
    });
