function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];

    if (buttonElement.textContent.includes('More')) {
        buttonElement.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';

    } else {
        buttonElement.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}