class Ship  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
    this.maxCrew = obj.maxCrew;
    this.odometer = 0;
  }
}

module.exports = Ship;
