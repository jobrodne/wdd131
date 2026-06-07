const products = [
    {
        id: 1,
        name: "Smart Thermostat"
    },
    {
        id: 2,
        name: "Wireless Doorbell"
    },
    {
        id: 3,
        name: "Robot Vacuum"
    },
    {
        id: 4,
        name: "Security Camera"
    },
    {
        id: 5,
        name: "Smart Light Bulb"
    },
    {
        id: 6,
        name: "Video Doorbell"
    }
];

const productSelect = document.getElementById("productName");

products.forEach(product => {

    const option = document.createElement("option");

    option.value = product.name;
    option.textContent = product.name;

    productSelect.appendChild(option);

});
// Footer
const yearElement = document.getElementById("currentyear");
const modifiedElement = document.getElementById("lastModified");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (modifiedElement) {
    modifiedElement.textContent = document.lastModified;
}