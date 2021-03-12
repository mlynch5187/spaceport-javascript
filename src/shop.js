class Shop  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.inventory = {}
  }

  addInventory(item)  {
    this.inventory[item.type] = item;
  }
}

module.exports = Shop;
