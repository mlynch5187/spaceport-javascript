var Shop = require('../src/shop');

class Planet  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.shop = obj.shop
  }
}

module.exports = Planet;
