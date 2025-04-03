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

document
  .getElementById("message-toggle")
  .addEventListener("click", function () {
    var contactIcons = document.getElementById("contact-icons");
    var messageToggle = document.getElementById("message-toggle");

    // Toggle display of contact icons
    if (contactIcons.style.display === "flex") {
      contactIcons.style.display = "none";
      messageToggle.innerHTML = '<i class="bx bx-message"></i>';
    } else {
      contactIcons.style.display = "flex";
      messageToggle.innerHTML = '<i class="bx bx-x"></i>';
    }
  });
