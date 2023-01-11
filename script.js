//  slider

const swiper = new Swiper(".swiper", {
  // Optional parameters

  // If we need pagination

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-previous",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

// Appending button in top-block divs. online-shopping button

const block = document.querySelectorAll(".top-block-1");

function addBtn(block) {
  for (let i = 0; i < block.length; i++) {
    let button = document.createElement("button");
    button.innerText = "შეძენა";
    button.classList.add("online-button");
    block[i].append(button);
  }
}
addBtn(block);

// burger -bar

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

// const physicalPerson = document.querySelector(".dropbtn-burger-1");
// physicalPerson.addEventListener("click", function () {});

const sosXbtn = document.querySelector(".fa-xmark-sos");
const sosDiv = document.querySelector(".sos-div-burger");
const sosBtn = document.querySelector(".sos-burger-block");

sosBtn.addEventListener("click", function () {
  sosDiv.style.display = "block";
});
sosXbtn.addEventListener("mouseenter", function () {
  sosDiv.style.display = "none";
});

// "physical person" item clicked  (overlay shown)

const physicalBtn = document.querySelector(".dropbtn-burger-1");
physicalBtn.addEventListener("click", function () {
  document.querySelector(".dropdown-content").style.display = "block";
  document.querySelector(".dropdown-content-burger").style.display = "block";
  document.querySelector(".dropdown-content-burger").style.display = "flex";

  sosDiv.style.display = "none";
});

const closeBtn = document.querySelector(".fa-mark-burger");
closeBtn.addEventListener("click", function () {
  document.querySelector(".dropdown-content").style.display = "none";
});
