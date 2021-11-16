const obj1 = {name: "Aoa"};
const obj2 = {name: "Bob"};
const obj3 = {name: "Coc"};

const mapObj = new Map();
mapObj.set(obj1, 1);
mapObj.set(obj2, 2);
mapObj.set(obj3, 3);

for (let i of mapObj) {
    console.log(i);
}