var Shop = require('../src/shop');

class Planet  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.coordinates = obj.coordinates;
    this.shop = obj.shop;
  }

  landShip(ship)  {
    this.currentShip = ship
  }
}

module.exports = Planet;
