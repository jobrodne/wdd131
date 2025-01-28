document.addEventListener("DOMContentLoaded", function () {
    // Display the last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        // Formula: Wind Chill in Fahrenheit
        return (
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    }

    // Static weather data
    const temperature = 10; // Celsius
    const windSpeed = 15; // km/h

    // Convert temperature to Fahrenheit and wind speed to mph
    const tempFahrenheit = (temperature * 9) / 5 + 32; // Celsius to Fahrenheit
    const windSpeedMph = windSpeed * 0.621371; // km/h to mph

    let windChill = "N/A";

    // Check valid conditions for Wind Chill
    if (tempFahrenheit <= 50 && windSpeedMph > 3) {
        windChill = calculateWindChill(tempFahrenheit, windSpeedMph) + "°F";
    }

    // Display the Wind Chill
    document.getElementById("windChill").textContent = windChill;
});