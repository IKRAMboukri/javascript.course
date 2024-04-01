class Animals{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Rabbit extends Animals{
    constructor(name,age,runSpeed){
      super(name,age);
      this.runSpeed = runSpeed;
    }
    run(){
        console.log(` ${this.name}can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animals{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;

    }
    swim(){
        console.log(` ${this.name}can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animals{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(` ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hawk",3,50);

console.log(rabbit.name)
console.log(fish.age)
console.log(hawk.flySpeed)


hawk.fly();