let openPopup = document.querySelectorAll('.buttonNews');
let popups = document.querySelectorAll('.popup');

openPopup.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const popupId = button.getAttribute('data-popup');
        const popup = document.querySelector(`#${popupId}`);
        if (popup) {
            popup.classList.add('active');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!popups.some(popup => popup.contains(e.target))) {
        popups.forEach(popup => popup.classList.remove('active'));
    }
});