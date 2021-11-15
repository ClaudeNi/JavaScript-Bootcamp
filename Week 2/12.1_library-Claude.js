var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function canRead(arr) {
    const nArr = arr.filter(function(item) {
        return item.readingStatus == true;
    })
    nArr.forEach(function(item) {
        console.log(`Author: ${item.author}`);
        console.log(`Name: ${item.title}`);
        console.log(`Reading Status: ${item.readingStatus} \n`);
    })
}