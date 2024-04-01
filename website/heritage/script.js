class Animals{
    

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animals{
    name = "rabbit";
    run(){
        console.log(`this ${this.name}is runing`);
    }
}
class Fish extends Animals{
    name = "fish";
}
class cow extends Animals{
    name = "cow"
}
const rabbit = new Rabbit("rabbit");
const fish = new Fish("fish");

rabbit.eat();
fish.sleep();