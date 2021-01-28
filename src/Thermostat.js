class Thermostat {

  constructor() {
    this.temperature = 20;
    this.max_temp = 25;
    this.min_temp = 10;
  }

  temp(){ return this.temperature; }
  reset(){ this.temperature = 20; }

  isPowerSavingOn() { return this.max_temp === 25; }
  togglePowerSaving(){ this.isPowerSavingOn() ? this.turnOffPowerSaving() : this.turnOnPowerSaving(); }
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

  usage() {
    if (this.temperature < 18){ return "low-usage";}
    else if (this.temperature <= 25){ return "medium-usage";} 
    else if (this.temperature > 25) { return "high-usage";}
  }

}