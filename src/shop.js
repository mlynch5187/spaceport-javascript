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
    if (ship.captain === undefined) {
      return `cannot outfit a ship without a captain`
    }
    if (ship.captain.credits < part.value)  {
      return `you require 200 more credits to make this purchase`
    }
    if (ship.captain.credits >= part.value)  {
      ship.captain.credits = (ship.captain.credits) -= (part.value)
      ship.parts[part.type] = part
      this.inventory -= part
      return `${part.type} added to ship`
    }
  }
}

module.exports = Shop;
