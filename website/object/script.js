const person1 = {
    firstName: "Spongbob",
    lastName: "Squarepants",
    age : 30,
    favFood: "hamburgers",
    isEmployed: true,
    sayHello: function(){console.log(`Hi ! I am ${this.firstName}!`)},
    eat : function(){console.log(`I am eating a ${this.favFood}`)},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age : 30,
    isEmployed: true,
    sayHello: () => {console.log(`Hi! I'm ${person2.firstName}`)},
    eat : () => {console.log("I am eating a Pizza")},

}

console.log(person1.firstName);
person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();
