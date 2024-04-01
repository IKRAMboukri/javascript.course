function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)};

}

const card1 = new Car("ford", "Mustang", 2024, "red");
const card2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const card3 = new Car("ford", "Mustang", 2024, "red");
card1.drive();
card2.drive();
card3.drive();