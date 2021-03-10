class Ship  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
    this.maxCrew = obj.maxCrew;
    this.fuelCapacity = 0;
    if (obj.odometer === undefined) {
      this.odometer = 0;
    } else {
      this.odometer = obj.odometer;
    }
  }
}

module.exports = Ship;
