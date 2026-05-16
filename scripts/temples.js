// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

    // Hamburger Menu
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});