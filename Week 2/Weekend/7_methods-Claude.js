const arr = [
    {
        title: "Phantom Blood",
        author: "Araki Hirohiko",
        year: "1987",
    },
    {
        title: "The Lost Hero",
        author: "Rick Riordan",
        year: "2010",
    },
    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        year: "1934",
    },
    {
        title: "The Warrior Heir",
        author: "Cinda Williams Chima",
        year: "2006",
    },
]

function printTitles(arr) {
    arr.forEach((book) => {
        console.log(book.title);
    })
}

function getAuthors(arr) {
    return arr.map((book) => {
        return book.author;
    })
}

function filterBeforeYear(arr, year) {
    return arr.filter(book => book.year < year);
}