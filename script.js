let navburger = document.querySelector(".hamburger");
let cross = document.querySelector(".cross");
let nav = document.querySelector(".nav");

navburger.addEventListener("click", (e) => {
  nav.classList.remove("nav-close");
});

cross.addEventListener("click", (e) => {
  nav.classList.add("nav-close");
});

let page = 0;
let leftbtn = document.querySelector(".left-btn");
let rightbtn = document.querySelector(".right-btn");

leftbtn.addEventListener("click", (e) => {
  if (page == 0) {
    page = 2;
  } else {
    page--;
  }

  refresh();
});

rightbtn.addEventListener("click", (e) => {
  if (page == 2) {
    page = 0;
  } else {
    page++;
  }

  refresh();
});

let pg = document.querySelector(".right-up");
let words = [
  [
    "Discover innovative ways to decorate",
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  ],
  [
    "We are available all across the globe",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  ],
  [
    "Manufactured with the best materials",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  ],
];

function refresh() {
  pg.querySelector("h1").innerText = words[page][0];
  pg.querySelector("p").innerText = words[page][1];
  
  if (window.innerWidth <= 800) {
    document.querySelector(
      ".left-up"
    ).style.content = `url(\"./images/mobile-image-hero-${page + 1}.jpg\")`;
  } else {
    document.querySelector(
      ".left-up"
    ).style.content = `url(\"./images/desktop-image-hero-${page + 1}.jpg\")`;
  }
}
