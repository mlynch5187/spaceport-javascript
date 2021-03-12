class Shop  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.inventory = {}
  }
}

module.exports = Shop;
