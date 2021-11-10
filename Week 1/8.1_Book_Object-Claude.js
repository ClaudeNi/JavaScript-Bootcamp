const book = {
    name: "Jojo's Bizarre Adventure",
    author: "Araki Hirohiko",
    year: "1987",
    publishingTime: "Jan 1 to Oct 26"
};

function bookFunction(book) {
    return `The Book ${book["name"]} was written by ${book["author"]} in the year ${book["year"]}.`;
}