class Part  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.type = obj.type;
    this.value = obj.value;
  }
}

module.exports = Part;
