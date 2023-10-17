let heroImage = document.querySelectorAll(".background");
let happy = document.querySelector(".happy");
let tanggal = document.querySelector(".tanggal");
let davina = document.querySelector(".davina");
let loveletter = document.querySelector(".loveletter");
let envelope = document.querySelector(".b-envelope");

let imageIndex = 0;

function changeBackground() {
  heroImage[imageIndex].classList.remove("showing");
  imageIndex++;
  if (imageIndex >= heroImage.length) {
    imageIndex = 0;
  }
  heroImage[imageIndex].classList.add("showing");
}

setTimeout(() => {
  happy.classList.add("fadeIn");
}, 2000);

setTimeout(() => {
  davina.classList.add("fadeIn");
}, 4000);

setTimeout(() => {
  tanggal.classList.add("fadeIn");
}, 6000);

setTimeout(() => {
  loveletter.classList.add("fadeIn");
}, 8000);

setTimeout(() => {
  envelope.classList.add("fadeIn");
}, 8000);

setInterval(changeBackground, 5000);
