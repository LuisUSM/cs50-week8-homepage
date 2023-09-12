/* Index HTML */
// Selecting HTML elements to interact with
const myPicture = document.getElementById("homepage-img-id");
const myHomeHero = document.getElementById("homepage-hero");
const myHomeText = document.getElementById("homepage-text");

// The code below makes my picture turn 360° when the pointer passes by
myPicture.addEventListener("mouseenter", () => 
{
  myPicture.classList.add("homepage-img-rotate");
});

myPicture.addEventListener("animationend", () => 
{
  myPicture.classList.remove("homepage-img-rotate");
});

myPicture.addEventListener("mouseleave", () => 
{
  myPicture.classList.remove("homepage-img-rotate");
});

// This code moves elements to their places when the page has just loaded
document.addEventListener("DOMContentLoaded", () =>
{
  myPicture.style.translate = "0%";
  myHomeHero.style.translate = "0%";
  myHomeText.style.translate = "0%";
});