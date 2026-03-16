const buttons = document.querySelectorAll('.buttons button');
console.log(buttons);

function handleButton(e) {
    console.log(e.target.textContent);
}

buttons.forEach(button => button.addEventListener('click', handleButton));