const searchiIcon = document.querySelector(".fa-magnifying-glass");
searchiIcon.addEventListener("mouseover", function () {
  document.querySelector(".new-search").style.display = "block";
});

searchiIcon.addEventListener("mouseout", function () {
  document.querySelector(".new-search").style.display = "none";
  setTimeout(3000);
});

const burgerBar = document.querySelector(".fa-bars");
const burgerNav = document.querySelector(".burger-navigation");
const xBtn = document.querySelector(".fa-xmark");
const container = document.querySelector(".container");

burgerBar.addEventListener("click", function () {
  burgerNav.classList.toggle("active-bar");
  container.style.display = "none";
  document.querySelector(".footer").style.display = "none";
});

xBtn.addEventListener("click", function () {
  // burgerNav.classList.add("inactive");
  burgerNav.classList.remove("active-bar");
  container.style.display = "block";
  document.querySelector(".footer").style.display = "block";
  sosDiv.style.display = "none";
});

const activeBar = document.querySelector(".active-bar");
