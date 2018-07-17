class TemperatureConverter {
  constructor() {
  }

  convertToF (celTemp) {
    return (celTemp * (9/5)) + 32;
  }

  convertToC (farTemp) {
    return (farTemp - 32) * (5/9);
  }
}

module.exports = TemperatureConverter;
