var Part = require('../src/part');

class Shop  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.inventory = {}
  }

  addInventory(item)  {
    if (item instanceof Part) {
      this.inventory[item.type] = item;

    }
  }
}

module.exports = Shop;
