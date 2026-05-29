// TEST CONNECTION
console.log("JS connected");

// CURRENT YEAR
document.getElementById("currentyear").textContent =
  new Date().getFullYear();

// LAST MODIFIED
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

// HAMBURGER MENU
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

// TEMPLE DATA
const temples = [

  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },

  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },

  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },

  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },

  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }

];

// SELECT GALLERY
const gallery = document.querySelector(".gallery");

// DISPLAY TEMPLES
function displayTemples(templeList) {

  // CLEAR OLD CONTENT
  gallery.innerHTML = "";

  // LOOP THROUGH TEMPLES
  templeList.forEach((temple) => {

    // CREATE CARD
    const card = document.createElement("section");

    // CREATE ELEMENTS
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const size = document.createElement("p");
    const image = document.createElement("img");

    // ADD CONTENT
    name.textContent = temple.templeName;

    location.innerHTML =
      `<strong>Location:</strong> ${temple.location}`;

    dedicated.innerHTML =
      `<strong>Dedicated:</strong> ${temple.dedicated}`;

    size.innerHTML =
      `<strong>Size:</strong> ${temple.area} sq ft`;

    // IMAGE SETTINGS
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    // APPEND ELEMENTS
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(size);
    card.appendChild(image);

    // ADD CARD TO GALLERY
    gallery.appendChild(card);
  });
}

// INITIAL DISPLAY
displayTemples(temples);

// FILTER NAVIGATION

// HOME
document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

// OLD
document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();

  const oldTemples = temples.filter((temple) =>
    parseInt(temple.dedicated) < 1900
  );

  displayTemples(oldTemples);
});

// NEW
document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();

  const newTemples = temples.filter((temple) =>
    parseInt(temple.dedicated) > 2000
  );

  displayTemples(newTemples);
});

// LARGE
document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();

  const largeTemples = temples.filter((temple) =>
    temple.area > 90000
  );

  displayTemples(largeTemples);
});

// SMALL
document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();

  const smallTemples = temples.filter((temple) =>
    temple.area < 10000
  );

  displayTemples(smallTemples);
});