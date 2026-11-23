const buttons = document.querySelectorAll('button[data-url]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const destination = button.getAttribute('data-url');
        window.location.href = destination;
    });
});