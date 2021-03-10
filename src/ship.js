class Ship  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
  }
}

module.exports = Ship;
