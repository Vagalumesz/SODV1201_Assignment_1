function convertTemperature() {
    let temp = parseFloat(document.getElementById("input-temp").value); // gets the value of the input
    let unit = document.getElementById("unit").value;

    let fahrenheit, celsius, kelvin;

    if (unit === "fahrenheit") {      // if statement and math to do the conversions
        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (unit === "celsius") {
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    } else {
        fahrenheit = (temp - 273.15) * 9 / 5 + 32;
        celsius = temp - 273.15;
    }

    document.getElementById("fahrenheit-output").textContent = fahrenheit + " °F"; // outputs the temperature depending 
    document.getElementById("celsius-output").textContent = celsius + " °C";       // on the choice pf the user
    document.getElementById("kelvin-output").textContent = kelvin + " K";
}
