const cityBtn = document.querySelector(".contacts__text");
const itemCity = document.querySelectorAll(".option__list");
const listContainer = document.querySelector(".option__container");

cityBtn.addEventListener("click", () => {
  cityBtn.classList.toggle("isOpen");
  listContainer.classList.toggle("isOpen");

  itemCity.forEach((item) => {
    item.addEventListener("click", () => {
      cityBtn.textContent = item.title;
      cityBtn.classList.toggle("isOpen");
      listContainer.classList.remove("isOpen");
    });
  });
});
