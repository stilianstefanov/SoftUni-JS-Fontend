function focused() {
    let inputElements = Array.from(document.getElementsByTagName('input'));

    inputElements.forEach((el) => {
        el.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.classList.add('focused');
        });
    });

    inputElements.forEach((el) => {
        el.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.classList.remove('focused');
        });
    });
}