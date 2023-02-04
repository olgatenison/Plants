//Change list button inner text
/*const listItems = document.getElementsByClassName("option__list");

for (let i = 0; i < listItems.length; ++i) {
  listItems[i].addEventListener("click", function () {
    document.getElementsByClassName("contacts__text")[0].innerHTML = this.title;
  });
}
*/

/*
for (let i = 0; i < radioButtons.length; ++i) {
  radioButtons[i].addEventListener("change", function () {
    if (this.checked) {
      document.getElementsByClassName("contacts__text")[0].textContent =
        this.parentElement.textContent;
    }
  });
}*/

const radioButtons = document.getElementsByClassName("option__list");
const target = document.getElementsByClassName("contacts__text")[0];
console.log(target);
for (let i = 0; i < radioButtons.length; ++i) {
  radioButtons[i].addEventListener("change", function () {
    console.log("Event triggered");
    if (this.checked) {
      target.textContent = this.parentElement.textContent;
    }
  });
}
