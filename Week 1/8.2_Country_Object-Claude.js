const myCountry = {
    country: "Japan",
    capital: "Tokyo",
    language: "Japanese",
    population: "125.8",
    neighbours: ["China", "Korea", "Russia"],
    describe() {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland() {
        return myCountry["isIsland"] = this.neighbours.length == 0 ? true : false;
    }
};