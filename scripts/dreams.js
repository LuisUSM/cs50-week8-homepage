// Here, the same actions are perform like in "hobbies.js". However, as by the characteristics of "dreams.html" in an easier way!
// Making the hero appear when then page has loaded.
const myDreamsHero = document.querySelector(".dreams-page-hero-text");

document.addEventListener("DOMContentLoaded", () =>
{
  myDreamsHero.style.opacity = "1";
});

// The same function, to check if the element is already in the user's screen.
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

// Applying some styles
let myDreams = document.querySelectorAll(".dream");

myDreams.forEach((dream, index) =>
{
  if((index % 2) == 0)
  {
    dream.style.translate = "-2.5% 0";
  }
  else
  {
    dream.style.translate = "2.5% 0";
  }
});

// Moving stuff when the use reaches it
const handleScroll = () =>
{
  myDreams.forEach((dream, index) =>
  {
    if(isElementInViewport(dream) && !dream.classList.contains("revealed"))
    {
      dream.classList.add("revealed");
      dream.style.opacity = "1";
      dream.style.translate = "0 0";
    }
  });

  if(Array.from(myDreams).every((dream) => dream.classList.contains("revealed")))
  {
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);


