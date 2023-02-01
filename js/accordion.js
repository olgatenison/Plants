//accordion
const accordionContant = document.querySelectorAll(".prices__price");

accordionContant.forEach((item, index) => {
  let header = item.querySelector(".prices__item");
  let description = item.querySelector(".prices__details");

  header.addEventListener("click", () => {
    header.classList.toggle("active");
    item.classList.toggle("active");
    description.classList.toggle("active");

    console.log(description);
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContant.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("active");

      let header2 = item2.querySelector(".prices__item");
      let description2 = item2.querySelector(".prices__details");

      description2.classList.remove("active");
      header2.classList.remove("active");
    }
  });
}
