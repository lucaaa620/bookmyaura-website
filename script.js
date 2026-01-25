const screens = [
  "assets/app1.png",
  "assets/app2.png",
  "assets/app3.png"
];

let index = 0;
const img = document.getElementById("appScreen");

setInterval(() => {
  index = (index + 1) % screens.length;
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = screens[index];
    img.style.opacity = 1;
  }, 300);

}, 3000);
