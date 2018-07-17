const expect = require('chai').expect;
const TemperatureConverter = require('../temp');

describe('Temperature Converter', () => {

  it('exists', () => {
    expect(TemperatureConverter).to.be.ok;
  });

  it('converts from C to F', () => {
    const tempConverter = new TemperatureConverter;
    expect(tempConverter.convertToF(100)).to.eql((100 * (9 / 5)) + 32);
  });

  it('converts from F to C', () => {
    const tempConverter = new TemperatureConverter;
    expect(tempConverter.convertToC(212)).to.eql((212 - 32) * (5 / 9));
  })

});
