//Change list button inner text
const listItems = document.getElementsByClassName("option__list");
for (let i = 0; i < listItems.length; ++i) {
  listItems[i].addEventListener("click", function () {
    document.getElementsByClassName("contacts__text")[0].innerHTML = this.title;
  });
}
