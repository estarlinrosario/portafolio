const increaseButtonEl = document.querySelector('.counter_button--increase');
const counterValue = document.querySelector('.counter_value');
const decreaseButtonEl = document.querySelector('.counter_button--decrease');
const updateButtonEl = document.querySelector('.counter_reset_button');
const counterTitle = document.querySelector('.counter_title');


increaseButtonEl.addEventListener('click', function () {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = JSON.parse(currentValue);
    const newValue = currentValueAsNumber + 1;
    if(newValue <= 5){

        counterValue.textContent = newValue;

    }else{
        counterTitle.classList.add('counter_limit');
        counterValue.classList.add('counter_limit');
        counterTitle.innerHTML = 'Limit! Buy PRO for > 5';
        decreaseButtonEl.disabled =true;
    }

});


decreaseButtonEl.addEventListener('click', function () {
    const currentValue = counterValue.textContent;

    if (currentValue > 0) {

        const currentValueAsNumber = JSON.parse(currentValue);
        const newValue = currentValueAsNumber - 1;
        counterValue.textContent = newValue;
    }

});

updateButtonEl.addEventListener('click', function () {
    const currentValue = counterValue.textContent;

    if (currentValue !== 0) {
        counterValue.textContent = 0;
        counterTitle.classList.remove('counter_limit');
        counterValue.classList.remove('counter_limit');
        counterTitle.innerHTML = 'Fancy Counter';
        increaseButtonEl.disabled = false;
        decreaseButtonEl.disabled = false;

    }
});