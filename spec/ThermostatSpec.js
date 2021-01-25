describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should set the temperature to 20", function() {
    expect(thermostat.temp()).toBe(20);
  });

  it("increases the temperature by 5", function() {
    thermostat.increaseBy(5)
    expect(thermostat.temp()).toBe(25);
  });

  it("decreases the temperature by 5", function() {
    thermostat.decreaseBy(5)
    expect(thermostat.temp()).toBe(15);
  });

});