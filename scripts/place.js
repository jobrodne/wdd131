
const currentYear = document.querySelector("#currentyear").textContent =
new Date().getFullYear();
const lastModified = document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
const temperature = 45;

const windSpeed = 10;

function calculateWindChill(temp, speed) {

    return (

        35.74 +

        0.6215 * temp -

        35.75 * Math.pow(speed, 0.16) +

        0.4275 * temp * Math.pow(speed, 0.16)

    ).toFixed(1);

}

let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {

    windChill = calculateWindChill(temperature, windSpeed) + " °F";

}

document.querySelector("#windchill").textContent = windChill;



