function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((el, i) => {
      if (typeof el != "string") {
        reject("bad array");
      } else {
        arr[i] = el.toUpperCase();
      }
    });
    resolve(arr);
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((el, i) => {
      if (typeof el != "string") {
        reject("bad array");
      }
    });
    resolve(arr.sort());
  });
}

const arrWords = ["bob", "larry", "alien", "kitchen"];
const arrWrong = ["bob", 10, "alien", "kitchen"];

makeAllCaps(arrWords).then((nArr) =>
  sortWords(nArr)
    .then((data) => console.log(data))
    .catch((err) => console.log("bad array"))
);
makeAllCaps(arrWrong).then((nArr) =>
  sortWords(nArr)
    .then((data) => console.log(data))
    .catch((err) => console.log("bad array"))
);
