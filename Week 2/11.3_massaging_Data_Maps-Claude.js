const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function names(arr) {
    return arr.map(function(data) {
        return data.name;
    })
}

function beforeNinety(arr) {
    const nArr = [];
    arr.forEach(function(data) {
        if (data.birthday.split("-")[2] < 1990) {
            nArr.push(data)
        }
    })
    return nArr;
}

function food(arr) {
    const food = {};
    arr.forEach(function(data) {
        const nArr = data.favoriteFoods.meats.concat(data.favoriteFoods.fish);
        nArr.forEach(function(item) {
            if (food[item] == undefined) {
                food[item] = 0;
            }
            food[item]++;
        })
    })
    return food;
}