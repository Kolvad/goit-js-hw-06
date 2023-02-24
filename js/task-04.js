const value = document.querySelector('#value');
const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnMinus.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

btnPlus.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});