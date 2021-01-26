describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should set the temperature to 20", function() {
    expect(thermostat.temp()).toBe(20);
  });

  it("increases the temperature by 5", function() {
    thermostat.increaseBy(5);
    expect(thermostat.temp()).toBe(25);
  });

  it("decreases the temperature by 5", function() {
    thermostat.decreaseBy(5);
    expect(thermostat.temp()).toBe(15);
  });

  it("doesn't let the temperature go below 10 degrees", function() {
    thermostat.decreaseBy(15);
    expect(thermostat.temp()).toBe(10);
  });

  it("sets power saving mode on when created", function(){
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it("can turn on/off power saving mode", function(){
    thermostat.turnOffPowerSaving()
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.turnOnPowerSaving()
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it("if the power saving mode is on, max temp = 25", function(){
    thermostat.increaseBy(10);
    expect(thermostat.temp()).toBe(25);
  });

  it("if the power saving mode is off, max temp = 32", function(){
    thermostat.turnOffPowerSaving();
    thermostat.increaseBy(10);
    expect(thermostat.temp()).toBe(30);
    thermostat.increaseBy(10);
    expect(thermostat.temp()).toBe(32);
  });

});