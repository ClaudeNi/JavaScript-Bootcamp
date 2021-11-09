function language(language) {
    switch (language.toUpperCase()) {
        case "MANDARIN":
            console.log("Mandarin: 'MOST number of native speakers!'");
            break;
        case "SPANISH":
            console.log("Spanish:'2nd place in number of native speakers'");
            break;
        case "ENGLISH":
            console.log("English: 3rd place");
            break;
        case "HINDI":
            console.log("Hindi: Number 4");
            break;
        case "ARABIC":
            console.log("Arabic: 5th most spoken language");
            break;
        default:
            console.log("Not in top 5");
            break;
    }
}