const menuItems = [
  { name: "Griot", price: 12 },
  { name: "Soup Joumou", price: 10 },
  { name: "Diri ak Pwa", price: 8 },
  { name: "Bannann Fri", price: 5 }
];

const menuList = document.getElementById("menuList");

if (menuList) {
  menuItems.forEach(item => {
    menuList.innerHTML += `<li>${item.name} - $${item.price}</li>`;
  });
}

// OBJECT
const restaurant = {
  name: "Lakay Haitian Kitchen",
  city: "Salt Lake City",
  specialty: "Griot"
};

// SAVE VISIT (localStorage)
const saveBtn = document.getElementById("saveVisitBtn");

if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    localStorage.setItem("visited", "true");
    alert("Visit saved!");
  });
}

// FORM
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;

    let message;

    if (guests > 8) {
      message = `Thanks ${name}, large groups require a phone call.`;
    } else {
      message = `Thank you ${name}, your reservation is received.`;
    }

    localStorage.setItem("lastUser", name);

    alert(message);
  });
}