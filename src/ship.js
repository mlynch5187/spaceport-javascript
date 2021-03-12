class Ship  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
    this.captain = obj.captain;
    this.maxCrew = obj.maxCrew;
    this.crew = [];
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
}

module.exports = Ship;
