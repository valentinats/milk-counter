const buttonPlus = document.querySelector('.js-plus-btn');
const buttonReset = document.querySelector('.js-reset-btn');
const counterText = document.querySelector('.js-counter');

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

buttonPlus.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
    counter = 0;

    counterText.innerText = counter;
});
