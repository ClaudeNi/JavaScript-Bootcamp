function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    console.log(this.speed + 10);
};

Car.prototype.deccelerate = function() {
    console.log(this.speed - 5);
};

let car1 = new Car("BMW", 120);
let car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.deccelerate();
car2.accelerate();
car2.deccelerate();

class CarClass {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate() {
        console.log(this.speed + 10);
    }

    deccelerate() {
        console.log(this.speed - 5);
    }
}

let carClass1 = new CarClass("BMW", 120);
let carClass2 = new CarClass("Mercedes", 95);

carClass1.accelerate();
carClass1.deccelerate();
carClass2.accelerate();
carClass2.deccelerate();