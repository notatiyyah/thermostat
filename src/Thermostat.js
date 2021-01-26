class Thermostat {

  constructor() {
    this.temperature = 20;
    this.max_temp = 25;
    this.min_temp = 10;
  }

  temp(){ return this.temperature; }

  isPowerSavingOn() { return (this.max_temp == 25 ? true : false ); }
  turnOnPowerSaving() { this.max_temp = 25; }
  turnOffPowerSaving() { this.max_temp = 32; }

  increaseBy(num){ 
    this.temperature += num;
    if (this.temperature > this.max_temp ) { this.temperature = this.max_temp; };
  }
  
  decreaseBy(num){
    this.temperature -= num;
    if (this.temperature < this.min_temp) {this.temperature = this.min_temp};
  }

}