class Thermostat {

  constructor() {
    this.temperature = 20;
  }

  temp(){ return this.temperature; }

  increaseBy(num){ this.temperature += num }
  decreaseBy(num){ this.temperature -= num }

}