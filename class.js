const data = {
  name: "Dhvanit",
  age: 20,
  email: "dhvanitparate123@gmail.com",
  phone: 9265920139,
  course: "JavaScript",
};

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is Created...");
  }

  eats() {
    console.log("Animal is eating..");
  }

  jumps() {
    console.log("Animal is jumping..");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Object is Created and he is a lion...");
  }

  eats() {
    super.eats();
    console.log("Lion is eating..");
  }
}

let a = new Animal("dhvanit");
console.log(a);

let l = new Lion("shera");
console.log(l);
