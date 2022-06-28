let messages = document.querySelectorAll(".message-line");
let buttonDiv = document.getElementsByClassName("button-div");

// функция отображает сообщение и скроллит к нему
const showMessage = (arrayOfMessages, indexOfMessage) => {
    arrayOfMessages[indexOfMessage].classList.add('show');
    console.log(arrayOfMessages[indexOfMessage].offsetTop);
    const pixelsFromTopToTop = arrayOfMessages[indexOfMessage].offsetTop;
    const pixelsOfHeightOfElement = arrayOfMessages[indexOfMessage].offsetHeight;
    const pixelsForButton = pixelsFromTopToTop + pixelsOfHeightOfElement;
    buttonDiv[0].style.top = `${pixelsForButton}px`;
    // ниже реализован скролл к появляющимся элементам
    const halfWindowInnerHeight = window.innerHeight / 2;
    const heightToTopFromLine = arrayOfMessages[indexOfMessage].offsetTop;
    const yScrollTo = heightToTopFromLine - halfWindowInnerHeight;
    window.scrollTo(0, yScrollTo);
};

let countOfShowedMessages = 0;

// функция которая запускает отображение следующего сообщения
const showNextMessage = () => {
    showMessage(messages, countOfShowedMessages);
    countOfShowedMessages += 1;
}

// показываем автоматически первые три сообщения
for (let i = 0; i < 3; i++) {
    setTimeout(showNextMessage, 1000 * i);
}

// получаем объект кнопки
const downButton = document.getElementById('down-button');
// слушаем нажатие на кнопку и вызываем функцию обработчик
downButton.addEventListener("click", showNextMessage);

// надо будет доделать
// дизейблим кнопку если прощелкали донизу
if (countOfShowedMessages >= 14) {
    downButton.classList.add('button-disable');
}
