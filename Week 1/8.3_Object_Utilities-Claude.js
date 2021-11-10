const book1 = {
    name: "Jojo's Bizarre Adventure",
    author: "Araki Hirohiko",
    year: "1987",
}

const book2 = {
    name: "Fate/Zero",
    author: "Gen Urobuchi",
    year: "2006"
}

const bookUtils = {
    getFirstPublished(book1, book2) {
        return book1.year < book2.year ? book1 : book2;
    },
    setNewEdition(book, editionYear) {
        book["latestEdition"] = editionYear;
    },
    setLanguage(book, language) {
        book["language"] = language;
    },
    setTranslation(book, language, translator) {
        book["translation"] = {translatorName: translator, newLanguage: language};
    },
    setPublisher(book, name, location) {
        book["publisher"] = {publisherName: name, newLocation: location};
    },
    isSamePublisher(book1, book2) {
        return book1.publisher.publisherName == book2.publisher.publisherName && book1.publisher.newLocation == book2.publisher.newLocation;
    }
}