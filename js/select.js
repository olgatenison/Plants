const cityBtn = document.querySelector(".contacts__text");
const itemCity = document.querySelectorAll(".option__list");
const listContainer = document.querySelector(".option__container");
const cityAddresses = document.querySelectorAll(".option__address");

//make all dives hiden
cityAddresses.forEach((address) => {
  address.style.display = "none";
});

//add isOpen class for choosing container - make visible container

cityBtn.addEventListener("click", () => {
  listContainer.classList.toggle("isOpen");
});

//change the city name on btn
itemCity.forEach((item) => {
  item.addEventListener("click", () => {
    cityBtn.textContent = item.title;
    listContainer.classList.remove("isOpen");

    //get choosing (data-city-id="n")
    const cityId = item.getAttribute("data-city-id");
    const selectedCity = `option__address address address-${cityId}`;

    //change the visible div (data-city-id="n")=(class address-n)
    cityAddresses.forEach((address) => {
      if (address.classList.contains(selectedCity.split(" ")[2])) {
        address.style.display = "block";
      } else {
        address.style.display = "none";
      }
    });
  });
});

//just btn select
/*
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
*/
