function greaterThanTen(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is bigger than 10`);
    } else {
      reject(`${num} is smaller than 10`);
    }
  })
    .then((result) => console.log(result))
    .catch((data) => console.log(data));
}

greaterThanTen(12);
greaterThanTen(5);
