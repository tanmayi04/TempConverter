//tests.js

const { expect } = require('chai');
const {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    celsiusToKelvin,
    kelvinToCelsius,
} = require('./problems');

describe('Temperature Converter Functions', () => {
    it('should convert Celsius to Fahrenheit', () => {
        expect(celsiusToFahrenheit(0)).to.equal(32);
        expect(celsiusToFahrenheit(100)).to.equal(212);
    });

    it('should convert Fahrenheit to Celsius', () => {
        expect(fahrenheitToCelsius(32)).to.equal(0);
        expect(fahrenheitToCelsius(212)).to.equal(100);
    });

    it('should convert Celsius to Kelvin', () => {
        expect(celsiusToKelvin(0)).to.equal(273.15);
        expect(celsiusToKelvin(100)).to.equal(373.15);
    });

    it('should convert Kelvin to Celsius', () => {
        expect(kelvinToCelsius(273.15)).to.equal(0);
        expect(kelvinToCelsius(373.15)).to.equal(100);
    });

    it('should handle absolute zero (0K)', () => {
        expect(kelvinToCelsius(0)).to.equal(-273.15);
    });

   /* it('should return NaN for invalid input', () => {
        const invalidInput = 'not a number';
        const result = celsiusToFahrenheit(invalidInput);

        expect(isNaN(result));
    });*/

    it('should throw an exception for invalid input', () => {
        const invalidInput = 'not a number';
        const convertFunction = () => celsiusToFahrenheit(invalidInput);

        expect(convertFunction).to.throw('Input must be a number');
    });
});
