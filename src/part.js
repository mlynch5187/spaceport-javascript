class Part  {
  constructor(obj) {
    obj = obj || {};
    this.type = obj.type;
    this.value = obj.value;
    this.broken = false;
    if (obj.name === undefined)  {      
      this.checkForValidity = 'This part needs a name!';
      this.isValid = false;
    } else {
      this.name = obj.name;
      this.isValid = true;
    }
  }
}

module.exports = Part;
