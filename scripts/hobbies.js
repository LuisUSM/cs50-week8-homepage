// Hobbies HTML
// In this part of the script, we make the hero text appear when page has finished loading. It is done by modifying some styles.
// The hero text is selected.
const myHobbiesText = document.querySelector(".hobbies-page-title");

// We fire the event and we wait to apply the changes.
document.addEventListener("DOMContentLoaded", () =>
{
  myHobbiesText.setAttribute("id", "hobbies-page-title-id");
});

// This is the funniest part of the code! The page has some cards, so I wanted to make them appear and move to their places according to the scrolling down movement of the user.

// This function returns a boolean. It tells us if the card has appear on screen or not yet.
const isElementInViewport = element => 
{
  const rect = element.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Cards are organized by rows. I wanted cards in odd rows to move from left to right, while cards in even rows move from right to left.
// Here, we get all rows and cards.
const rows = document.querySelectorAll(".row");
const cards = document.querySelectorAll(".card");

// Getting the number of cards per row is needed.
let numberOfRows = rows.length;
let numberOfCards = cards.length;
let cardsPerRow = numberOfCards / numberOfRows;

// I get the cards of each group move to the right or to the left dynamically, so that if more rows and cards are added to the HTML, they will just do fine! So that, modifications to the script are not necessary. This is done by the code below till "Till here!".
// The flag helps us to apply the corresponding style to make the card start on the left or on the right.
let cardsPerRowDyn = cardsPerRow;
let flag = true;

// To make things work fine, we assign the percentage of the "translate property" according to the screen size.
const movementSize = Math.round(((window.innerWidth > 0) ? window.innerWidth : screen.width) / 100);

const applyMovementPerRow = (flag, element, movementSize) =>
{
  flag ? element.style.translate = `-${movementSize}% 0` : element.style.translate = `${movementSize}% 0`;
}

cards.forEach((card, index) =>
{
  if (index < cardsPerRowDyn)
  {
    applyMovementPerRow(flag, card, movementSize);
  }
  else
  {
    cardsPerRowDyn += cardsPerRow;
    flag = !flag;
    applyMovementPerRow(flag, card, movementSize);
  }
});
// Till here!

// Here is the code that actually makes the cards move when the user reaches them.
const handleScroll = () =>
{
  cards.forEach((card, index) => 
  {
    if (isElementInViewport(card) && !card.classList.contains("revealed")) 
    {
      card.classList.add("revealed");
      card.style.opacity = "1";
      card.style.translate = "0 0";
      card.style.transition = "opacity 1s ease-out, translate 1.5s ease-out, scale 0.25s ease-out, box-shadow 0.25s ease-out";
    }
  });

  // If all cards have been already moved, then delete the "scroll" event.
  if (Array.from(cards).every((card) => card.classList.contains("revealed"))) 
  {
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

