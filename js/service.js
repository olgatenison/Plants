/*const serviseBtn = document.querySelectorAll(".service__button");
const cards = document.querySelectorAll(".service__item");
console.log(cards.classList);

serviseBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = button.textContent;

    cards.forEach((card) => {
      card.classList.remove("outOfBlur");
      if (card.dataset.title === buttonText) {
        card.classList.add("outOfBlur");
      } else {
        card.classList.add("onBlur");
      }
    });
  });
});*/


/*const serviceBtns = document.querySelectorAll(".service__button");
const serviceCards = document.querySelectorAll(".service__item");

let activeBtn = null;

function setActiveBtn(btn) {
  if (activeBtn) {
    if (activeBtn === btn) {
      activeBtn.classList.remove("active");
      activeBtn = null;
    } else {
      setActiveBtn(activeBtn);
    }
  }

  if (btn) {
    btn.classList.add("active");
    activeBtn = btn;
  }

  serviceCards.forEach((card) => {
    card.classList.toggle("outOfBlur", card.dataset.title === btn?.textContent);
    card.classList.toggle("onBlur", card.dataset.title !== btn?.textContent);
  });
}

serviceBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const isMultiple = e.metaKey || e.ctrlKey || e.shiftKey;
    const isActive = btn === activeBtn;

    if (!isMultiple) {
      setActiveBtn(isActive ? null : btn);
    } else {
      setActiveBtn(activeBtn === btn ? null : btn);
      btn.classList.toggle("active");
    }
  });
});*/



const serviceBtns = document.querySelectorAll(".service__button");
const serviceCards = document.querySelectorAll(".service__item");

// создаем переменную activeBtn, которая будет использоваться для хранения ссылки на активную кнопку на странице
let activeBtn = null;

// создаем функцию setActiveBtn, которая будет использоваться для установки активной кнопки на странице
function setActiveBtn(btn) {

  // если на странице уже есть активная кнопка, то мы должны ее сначала деактивировать
  if (activeBtn) {
    // если переданная кнопка совпадает с активной кнопкой, то мы должны ее деактивировать
    if (activeBtn === btn) {
      activeBtn.classList.remove("active"); // удаляем класс "active" с активной кнопки
      activeBtn = null; // устанавливаем переменную activeBtn в null
    } 
    // если переданная кнопка не совпадает с активной кнопкой, то мы должны сначала деактивировать активную кнопку, а затем активировать переданную кнопку
    else {
      setActiveBtn(activeBtn); // рекурсивно вызываем функцию setActiveBtn с текущей активной кнопкой, чтобы ее деактивировать
    }
  }

  // если переданная кнопка не null, то мы должны активировать ее
  if (btn) {
    btn.classList.add("active"); // добавляем класс "active" на переданную кнопку
    activeBtn = btn; // сохраняем ссылку на переданную кнопку в переменную activeBtn
  }

  // переключаем классы "outOfBlur" и "onBlur" на элементах, имеющих класс "service__item", в зависимости от того, соответствует ли значение атрибута "data-title" элемента значению текста переданной кнопки.
  serviceCards.forEach((card) => {
    card.classList.toggle("outOfBlur", card.dataset.title === btn?.textContent);
    card.classList.toggle("onBlur", card.dataset.title !== btn?.textContent);
  });
}

// добавляем обработчик событий "click" на все элементы с классом "service__button"
serviceBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const isMultiple = e.metaKey || e.ctrlKey || e.shiftKey; // проверяем, нажата ли клавиша "meta", "ctrl" или "shift"
    const isActive = btn === activeBtn; // проверяем, является ли нажатая кнопка уже активной

    // если не нажата ни одна из клавиш "meta", "ctrl" или "shift", то мы должны установить переданную кнопку как активную (и деактивировать предыдущую активную кнопку
