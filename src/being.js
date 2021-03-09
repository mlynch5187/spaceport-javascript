class Being {
  constructor(name, species) {
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = 0;
  }

  addCredits(credits)  {
    this.credits += credits;
  }

  updateCredits(credits) {
    this.credits += credits;    
  }
}

module.exports = Being;
