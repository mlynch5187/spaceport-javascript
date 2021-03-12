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

  outfitShip(ship, part)  {
    if (this.captain === undefined) {
      return `cannot outfit a ship without a captian`
    }
  }
}

module.exports = Shop;
