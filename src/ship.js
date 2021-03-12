class Ship  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
    this.captain = obj.captain;
    this.maxCrew = obj.maxCrew;
    this.parts = obj.parts || {};
    this.crew = [];
    this.cargo = [];
    this.fuelCapacity = 0;
    this.fuel = 0;
    if (obj.odometer === undefined) {
      this.odometer = 0;
    } else {
      this.odometer = obj.odometer;
    }
    if (obj.fuelCapacity === undefined) {
      this.fuelCapacity = 10;
    } else {
      this.fuelCapacity = obj.fuelCapacity;
    }
  }

  addCrew(crew) {
    for (var i = 0; i < crew.length; i++) {
      if (this.crew.length < this.maxCrew && crew[i].constructor.name === 'Being') {
        this.crew.push(crew[i]);
      }
    }
  }

  loadCargo(load) {
    if (load.constructor.name === 'Part') {
      this.cargo.push(load)
    }
  }

  updatePart(part)  {
    if (this.parts[part.type]) {
      var oldValue = this.parts[part.type].value;
    }
    this.parts[part.type] = part;
    return oldValue - part.value
  }

  checkReadiness() {
    if (this.captain === undefined) {
      this.readyToFly = false;
      return `Cannot fly without a captain`
    } else if (this.fuel === 0) {
      this.readyToFly = false;
      return `Cannot fly without fuel`
    } else {
      this.readyToFly = true;
      return `Good to go!`
    }
  }
}

module.exports = Ship;
