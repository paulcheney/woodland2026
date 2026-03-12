// Store the selected elements that we are going to use. 
const hamburger = document.querySelector(".hamburger-button");
const navigation = document.querySelector(".site-nav");

// Open / close main menu
hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburger.classList.toggle("open");
});