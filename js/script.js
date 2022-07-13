// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav");
const subMenuBtn1 = document.querySelector(".menu-item-has-children-home");
const subMenuBtn2 = document.querySelector(".menu-item-has-children-shop");
const subMenu1 = document.querySelector(".sub-menu-home");
const subMenu2 = document.querySelector(".sub-menu-shop");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

subMenuBtn1.addEventListener("click", () => {
  subMenu1.classList.toggle("active");
});

subMenuBtn2.addEventListener("click", () => {
  subMenu2.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    subMenu1.classList.remove("active");
    subMenu2.classList.remove("active");
  })
);

//section-one slider

const btn_prev = document.querySelector(".section-exclusives-slider .prev");
const btn_next = document.querySelector(".section-exclusives-slider .next");

const images = document.querySelectorAll(
  ".section-exclusives-slider .photos img"
);
let i = 0;

btn_prev.onclick = function () {
  images[i].classList.remove("showed");
  i = i - 1;

  if (i < 0) {
    i = images.length - 1;
  }

  images[i].classList.add("showed");
};

btn_next.onclick = function () {
  images[i].classList.remove("showed");
  i = i + 1;

  if (i >= images.length) {
    i = 0;
  }

  images[i].classList.add("showed");
};

//other sections sliders

const productContainers = [...document.querySelectorAll(".products")];
const nxBtn = [...document.querySelectorAll(".next")];
const preBtn = [...document.querySelectorAll(".prev")];

productContainers.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nxBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

function actualDate() {
  date = new Date();
  year = date.getFullYear();
  document.getElementById("current_date").innerHTML = year;
}
actualDate();
