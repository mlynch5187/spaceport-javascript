class Ship  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
    this.maxCrew = obj.maxCrew;
  }
}

module.exports = Ship;
