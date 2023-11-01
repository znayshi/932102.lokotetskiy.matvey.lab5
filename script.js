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

popups.forEach((popup) => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });
});