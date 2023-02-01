//ancors-scroll

const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const scrollto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";

    document.querySelector(scrollto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//menu-burger

(function () {
  const burger = document.querySelector(".burger");
  const navigation = document.querySelector(".navigation");
  const menuLinks = document.querySelectorAll(".navigation__link");

  burger.addEventListener("click", () => {
    burger.classList.toggle("menu-open");
    navigation.classList.toggle("menu-open");
  });

  if (window.innerWidth < 768) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        navigation.classList.remove("menu-open");
        burger.classList.remove("menu-open");
      });
    }
  }
})();
