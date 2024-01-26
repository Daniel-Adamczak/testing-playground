export function convertTemperature(value, fromUnit, toUnit) {
  if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
    return (value * 9) / 5 + 32;
  } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
    return ((value - 32) * 5) / 9;
  } else {
    throw new Error('Invalid temperature conversion');
  }
}
