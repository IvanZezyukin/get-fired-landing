let messages = document.querySelectorAll(".message-line");

const showMessage = (arrayOfMessages, indexOfMessage) => {
    arrayOfMessages[indexOfMessage].classList.add('show');
    window.scrollTo(0, document.body.scrollHeight);
};

// При добавлении функции рамдомной генерации времени появления сообщений, они иногда начали появляться не в своем порядке... Если захотим прикрутить это, надо будет подумать над правильной реализацией
// function getRandomArbitrary(min = 1000, max = 2000) {
//     return Math.random() * (max - min) + min;
// };
// const getRandomTiming = (multiplier = 1) => {
//     console.log(getRandomArbitrary() * multiplier)
//     return getRandomArbitrary() * multiplier;
// };

for (let i = 0; i < messages.length; i++) {
    setTimeout(showMessage, 2000 * i, messages, i);
};