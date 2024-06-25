let navigatorBtns = document.querySelectorAll("ul li button");
let container = document.querySelectorAll(".components-container");
let header = document.querySelector(".header");
let info = document.querySelector(".info");
let nextBtn = document.querySelector(".next-btn");
let previousBtn = document.querySelector(".prev-btn");
let currentPage = 1;

previousBtn.style.opacity = "0";
previousBtn.style.pointerEvents = "none";

let updateContainerDisplay = () => {
  container.forEach((el, elIndex) => {
    if (elIndex + 1 === currentPage) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

let updateButtonStates = () => {
  navigatorBtns.forEach((button, index) => {
    if (index + 1 === currentPage) {
      button.style.backgroundColor = "white";
      button.style.color = "black";
    } else {
      button.classList.remove("active");
      button.style.backgroundColor = "";
      button.style.color = "";
    }
  });
};

let updateNavBtn = () => {
  if (currentPage === 1) {
    previousBtn.style.opacity = "0";
    previousBtn.style.pointerEvents = "none";
  } else {
    previousBtn.style.opacity = "1";
    previousBtn.style.pointerEvents = "auto";
  }

  if (currentPage === container.length) {
    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = "none";
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "auto";
  }
};

updateContainerDisplay();
updateButtonStates();
updateNavBtn();

navigatorBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentPage = index + 1;
    updateContainerDisplay();
    updateButtonStates();
    updateNavBtn();
  });
});

previousBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    updateContainerDisplay();
    updateButtonStates();
    updateNavBtn();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < container.length) {
    currentPage += 1;
    updateContainerDisplay();
    updateButtonStates();
    updateNavBtn();
  }
});
