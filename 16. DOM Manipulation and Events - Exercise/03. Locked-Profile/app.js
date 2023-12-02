function lockedProfile() {
    const profiles = Array.from(document.getElementsByClassName('profile'));

    for (const profile of profiles) {
        let unlockButton = profile.getElementsByTagName('input')[1];
        let showMoreButton = profile.getElementsByTagName('button')[0];
        let hiddenInfo = profile.getElementsByTagName('div')[0];

        showMoreButton.addEventListener('click', () => {

            if (unlockButton.checked) {
                if (showMoreButton.textContent == 'Show more') {
                    showMoreButton.textContent = 'Hide it';
                    hiddenInfo.style.display = 'block';

                } else {
                    showMoreButton.textContent = 'Show more';
                    hiddenInfo.style.display = 'none';
                }
            }
        });
    }
}