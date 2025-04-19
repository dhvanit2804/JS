const student = {
  fullname: "Dhvanit parate",
  age: 20,
  marks: 90,
  printMarks: function () {
    console.log("marks: ", this.marks);
  },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("tax rate is 20%");
  },
};

karanArjun.__proto__ = employee;

// Classes in JS
// Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.


class ToyotaCar {
  constructor(brand) {
    console.log("Creating New Object");
    this.brand = brand;
  }
  start() {
    console.log("Car started");
  }

  stop() {
    console.log("Car stopped");
  }
}

let fortuner = new ToyotaCar("fortuner");
let lexus = new ToyotaCar("lexus");