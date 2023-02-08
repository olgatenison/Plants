const serviseBtn = document.querySelectorAll(".service__button");
console.log(serviseBtn);

const cards = document.querySelectorAll(".card");

// loop through each button and add a click event listener
serviseBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
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

// add focus and blur event listeners to the cards
cards.forEach((card) => {
  card.addEventListener("focus", (e) => {
    e.target.style.backgroundColor = "lightgray";
  });
  card.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "white";
  });
});
//*This code first selects all the buttons and cards using querySelectorAll() and stores them in the buttons and cards variables, respectively. Then, it adds a click event listener to each button. When a button is clicked, the event listener removes the active class from all buttons, adds the active class to the clicked button, and loops through each card. If the card's title matches the text of the clicked button, the card is displayed. Otherwise, the card is hidden. Finally, it adds focus and blur event listeners to the cards. When a card is in focus, its background color is set to light gray. When a card is blurred, its background color is set to white. */
