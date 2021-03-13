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

  calculateDistance(planet) {
    console.log(planet.coordinates)
    return Math.sqrt((planet.coordinates['x'] ** 2) + (planet.coordinates['y'] ** 2) + (planet.coordinates['z'] ** 2))
  }

  refuel(ship)  {
    ship.fuel = ship.fuelCapacity
  }

  giveClearance(planet) {
    if (this.currentShip.fuel === 0)  {
      return "Clearance denied: Cannot fly without fuel"
    }
  }
}

module.exports = Planet;
