document.addEventListener('DOMContentLoaded', () => {
    const navTriggers = document.querySelectorAll('[data-url]');

    navTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = trigger.getAttribute('data-url');
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });
});
