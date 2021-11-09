function countryToLiveIn(language, isIsland, population, country) {
    if (language.toUpperCase() == "ENGLISH" && isIsland == false && population < 50000000) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria.`);
    }
}