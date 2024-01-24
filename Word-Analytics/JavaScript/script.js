const textAreaElement = document.querySelector('.text-area');
const charactersNumber = document.querySelector('.stat-number-characters');
const twitterNumberElement = document.querySelector('.stat-number-twitter');
const facebookNumberElement = document.querySelector('.stat-number-facebook');
const numberOfWordElement = document.querySelector('.stat-number-words');


textAreaElement.addEventListener('input', function () {
    //determine the numbers
    let numberOfWords = textAreaElement.value.split(' ').length;
    const numberOfCharacters = textAreaElement.value.length;
    const twitterCharsLeft = 280 - numberOfCharacters;
    const facebookCharsLeft = 2220 - numberOfCharacters;


    //limit of chars
    if (twitterCharsLeft < 0) {
        twitterNumberElement.classList.add('stat-number-limit');
    } else {
        twitterNumberElement.classList.remove('stat-number-limit');
    }

    if (facebookCharsLeft < 0) {
        facebookNumberElement.classList.add('stat-number-limit');
    } else {
        facebookNumberElement.classList.remove('stat-number-limit');
    }

    if(textAreaElement.value.length === 0){
        numberOfWords = 0;
    }


    //set new numbers
    charactersNumber.textContent = numberOfCharacters;
    twitterNumberElement.textContent = twitterCharsLeft;
    facebookNumberElement.textContent = facebookCharsLeft;
    numberOfWordElement.textContent = numberOfWords;




});