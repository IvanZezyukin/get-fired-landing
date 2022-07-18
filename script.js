let messages = document.querySelectorAll(".message-line");
let buttonDiv = document.getElementsByClassName("button-div");

// функция которая запускает отображение следующего сообщения
const showNextMessage = () => {
    showMessage(messages, countOfShowedMessages);
    countOfShowedMessages += 1;
}

// получаем объект кнопки
const downButton = document.getElementById('down-button');
// слушаем нажатие на кнопку и вызываем функцию обработчик
downButton.addEventListener("click", showNextMessage);

const registerUser = () => alert('user registred');

// функция отображает сообщение и скроллит к нему
const showMessage = (arrayOfMessages, indexOfMessage) => {
    arrayOfMessages[indexOfMessage].classList.add('show');

    console.log(arrayOfMessages[indexOfMessage].offsetTop);

    // ниже я реализую отступ от верха для кнопки при каждом новом сообщении
    const pixelsFromTopToTop = arrayOfMessages[indexOfMessage].offsetTop;
    const pixelsOfHeightOfElement = arrayOfMessages[indexOfMessage].offsetHeight;
    const pixelsForButton = pixelsFromTopToTop + pixelsOfHeightOfElement;
    buttonDiv[0].style.top = `${pixelsForButton}px`;

    // скролл к центру каждого нового сообщения
    arrayOfMessages[indexOfMessage].scrollIntoView({block: "center", behavior: "smooth"});

    // меняем кнопку если прощелкали донизу
    if (indexOfMessage >= 13) {
        downButton.innerText = 'ЗАРЕГИСТРИРОВАТЬСЯ';
        downButton.removeEventListener("click", showNextMessage);
        downButton.addEventListener('click', registerUser);
    }
};

let countOfShowedMessages = 0;

// показываем автоматически первые три сообщения
for (let i = 0; i < 3; i++) {
    setTimeout(showNextMessage, 1000 * i);
}

// присваиваем хедеру новый класс при сролле
function updateScroll() {
    if (window.scrollY > 0) {
        let header = document.querySelector("header");
        header.classList.add("header__scrolled");
    } else {
        let header = document.querySelector("header");
        header.classList.remove("header__scrolled");
    };
}
window.addEventListener("scroll", updateScroll);