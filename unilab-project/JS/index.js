const navBar = document.getElementById("navBar");

function toggleNavbar() {
  if (navBar.style.width == "100%") {
    navBar.style.width = "0";
  } else {
    navBar.style.width = "100%";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

const service = document.createElement("div");
service.classList.add("service");
const services = document.getElementById("services");

const ourservices = [
  {
    src: "./assets/discover/BOING.png",
    h3: "flight booking",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quidem veniam consequatur aperiam!",
  },
  {
    src: "./assets/discover/courtyard.png",
    h3: "HOTEL & RESORT BOOKING",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quidem veniam consequatur aperiam!",
  },
  {
    src: "./assets/discover/familythatidonthave.png",
    h3: "FAMILY TRIP PLANNER",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quidem veniam consequatur aperiam!",
  },
  {
    src: "./assets/discover/icebergmagnet.png",
    h3: "CRUISE TOUR",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quidem veniam consequatur aperiam!",
  },
  {
    src: "./assets/discover/stars.png",
    h3: "FIRE CAMP",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quidem veniam consequatur aperiam!",
  },
  {
    src: "./assets/discover/office.png",
    h3: "CORPORATE HOLIDAYS",
    p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quidem veniam consequatur aperiam!",
  },
];

ourservices.forEach((ourservice) => {
  service.innerHTML = `
    <img src="${ourservice.src}" alt="flight">
    <h3>${ourservice.h3}</h3>
    <p>${ourservice.p}</p>
    `;

  service.setAttribute("onclick", "showmodel(this)");

  services.appendChild(service.cloneNode(true));
});

function showmodel(w) {
  const model = document.createElement("div");
  model.classList.add("model");
  model.setAttribute("onclick", "removemodel(this)");

  const modelcnt = document.createElement("div");
  modelcnt.classList.add("modelcnt");

  modelcnt.innerHTML = w.innerHTML;

  model.appendChild(modelcnt);

  services.appendChild(model);
}

function removemodel(model) {
  model.children[0].style.animationName = "slideOut";

  setTimeout(() => {
    model.remove();
  }, 300);
}
