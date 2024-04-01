class MathUtil{
    static PI = 3.145678;

    static getDiameter(raduis){
        return raduis * 2;
    }

    static getCercumference(raduis){
        return 2 * this.PI * raduis;
    }
}
console.log(MathUtil.PI)
console.log(MathUtil.getCercumference(10))
console.log(MathUtil.getDiameter(10))



//EXP
class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`there are ${User.userCount}`);
    }
    sayHello(){
        console.log(`my username is ${this.username}`);
    }
}

const user1 = new User ("Spon");
const user2 = new User ("Spon");
const user3 = new User ("Spon");


console.log(user1.username);

console.log(User.userCount);


user1.sayHello();

User.getUserCount();