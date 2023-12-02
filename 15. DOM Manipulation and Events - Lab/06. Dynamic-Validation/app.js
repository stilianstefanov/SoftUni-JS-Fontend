function validate() {
    let emailInput = document.getElementById('email');
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g;

    emailInput.addEventListener('change', (e) => {
        if (e.currentTarget.value.match(pattern)) {
            e.currentTarget.classList.remove('error');
        } else {
            e.currentTarget.classList.add('error');
        }
    });
}