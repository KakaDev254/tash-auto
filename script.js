const images = document.querySelectorAll(".hero img");
let currentIndex = 0;

function fadeImages() {
  images.forEach((img, index) => {
    img.classList.remove("active");
  });
  images[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(fadeImages, 4000);

function toggleMenu() {
  let menu = document.querySelector(".floating-menu");
  let toggleBtn = document.getElementById("toggleBtn").querySelector("i");

  menu.classList.toggle("show");

  // Toggle between chat icon and close (X) icon
  if (menu.classList.contains("show")) {
    toggleBtn.classList.replace("bx-message-detail", "bx-x");
  } else {
    toggleBtn.classList.replace("bx-x", "bx-message-detail");
  }
}
