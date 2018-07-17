class TemperatureConverter {
  constructor() {
  }

  // takes Celsius temp and converts to F
  convertToF (celTemp) {
    return (celTemp * (9/5)) + 32;
  }

  // takes Farenheit temp and converts to C
  convertToC (farTemp) {
    return (farTemp - 32) * (5/9);
  }
}

module.exports = TemperatureConverter;
