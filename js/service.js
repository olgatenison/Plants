const serviseBtn = document.querySelectorAll(".service__button");
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
});
