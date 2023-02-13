const serviseBtn = document.querySelectorAll(".service__button");
console.log(serviseBtn);
const cards = document.querySelectorAll(".service__item");
console.log(cards);

let activeButtons = 0;

serviseBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (activeButtons < 2) {
      const buttonText = button.textContent;
      cards.forEach((card) => {
        if (card.dataset.title === buttonText) {
          card.classList.add("active");
          activeButtons++;
        }
      });
    }
  });
});

/* 
serviseBtn.forEach((button) => {
  // loop through each button and add a click event listener
  button.addEventListener("click", (e) => {
    const buttonText = button.textContent;
    console.log(button.textContent);

    cards.forEach((card) => {
      if (card.dataset.title === buttonText) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  });
});

 
    // remove active class from all buttons
    serviseBtn.forEach((b) => b.classList.remove("active"));
    // add active class to clicked button
    e.target.classList.add("active");
    // loop through each card
    cards.forEach((card) => {
      // if the card's title matches the text of the clicked button, show the card
      if (
        card.querySelector(".card__title").textContent === e.target.textContent
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

add focus and blur event listeners to the cards
cards.forEach((card) => {
  card.addEventListener("focus", (e) => {
    e.target.style.backgroundColor = "lightgray";
  });
  card.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "white";
  });
});
*/
