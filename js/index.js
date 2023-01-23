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
  const burger = querySelector(".burger");
  const navigation = querySelector(".navigation");

  burger.classlist.toggle("menu-open");
  navigation.classlist.toggle("menu-open");
})();
