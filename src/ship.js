class Ship  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
    this.maxCrew = obj.maxCrew;
    if (obj.odometer === undefined) {
      this.odometer = 0;
    } else {
      this.odometer = obj.odometer;
    }
  }
}

module.exports = Ship;
