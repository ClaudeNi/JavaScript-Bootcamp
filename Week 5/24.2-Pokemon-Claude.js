function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let pikachu = new Pokemon("Pikachu", "Electric", ["Thunder Shock", "Quick Attack", "Tail Whip", "Thunderbolt"]);
let charmander = new Pokemon("Charmander", "Fire", ["Ember", "Scratch", "Fire Fang", "Slash"]);
let treecko = new Pokemon("Treecko", "Grass", ["Quick Attack", "Detect", "Slam", "Leaf Storm"]);

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function(num) {
    console.log(`${this.name} used ${this.attackList[num]}`);
};

pikachu.callPokemon();
pikachu.attack(3);

charmander.callPokemon();
charmander.attack(0);

treecko.callPokemon();
treecko.attack(2);