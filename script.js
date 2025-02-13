const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const openThis = document.getElementsByClassName('openthis');
const card = document.querySelector('.card');
const body = document.body;

yesButton.addEventListener('click', () => {
    console.log('Yes button clicked');
    Array.from(openThis).forEach(element => {
        element.style.transition = 'opacity 0.1s ease-in-out';
        element.style.opacity = 0;
        element.style.display = 'flex';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 10);
    });

    // Dim the body
    body.style.background = 'none';
    body.style.transition = 'background-color 0.1s ease-in-out';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // Dim the buttons
    yesButton.style.transition = 'background-color 0.1s ease-in-out';
    yesButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    noButton.style.transition = 'background-color 0.1s ease-in-out';
    noButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // Dim the cards
    card.style.transition = 'opacity 0.1s ease-in-out';
    card.style.opacity = 0;
    // Move the buttons to the back
    yesButton.style.zIndex = -1;
    noButton.style.zIndex = -1;
});

noButton.addEventListener('click', () => {
    console.log('No button clicked');
    noButton.style.position = 'absolute';
    noButton.style.top = `calc(${Math.random() * 100}% - 35px)`;
    noButton.style.left = `calc(${Math.random() * 100}% - 150px)`;
});