// problems.js

// Function to convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    if (typeof celsius == 'not a number' || isNaN(celsius)) {
        //return NaN; // Return NaN for invalid input
        throw new Error('Input must be a number');
    }

    // The conversion formula: (�C � 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}



// Function to convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit == 'not a number' || isNaN(fahrenheit)) {
        //return NaN; // Return NaN for invalid input
        throw new Error('Input must be a number');
    }
    const celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

// Function to convert from Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Function to convert from Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius, celsiusToKelvin, kelvinToCelsius };
