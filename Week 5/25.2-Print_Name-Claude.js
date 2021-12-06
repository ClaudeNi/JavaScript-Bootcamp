const obj = {
    name: "bob",
    printName: function() {
        console.log(this.name);
    },
    printNameWithTimeout: function() {
        setTimeout(this.printName.bind(obj), 1000);
    },
}

obj.printName();
obj.printNameWithTimeout();