const buttons = document.querySelectorAll('.buttons button');
const submit = document.querySelector('.submit');
const main = document.querySelector('main');
const thanks = document.querySelector('.thank-you');
const scoreDisplay = document.querySelector('#score-display');
const popover = document.querySelector('#popover');
let score = null;

const eraseScore = () => [...buttons]
    .filter(btn => btn.classList.contains('chosen'))
    .forEach(btn => btn.classList.remove('chosen'));

function handleButton(e) {
    eraseScore();
    e.target.classList.add('chosen');
    score = e.target.dataset.score;
    scoreDisplay.textContent = score;
    console.log(score);
}

const displayScore = () => {
    main.style.display = 'none';
    thanks.style.display = 'flex';
    popover.showPopover();
    setTimeout(() => {
        eraseScore();
        thanks.style.display = 'none';
        main.style.display = 'flex';
        popover.hidePopover();
    }, 5000);
};

buttons.forEach(button => button.addEventListener('click', handleButton));
submit.addEventListener('click', displayScore);