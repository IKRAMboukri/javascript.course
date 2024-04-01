class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`${this.name}`);
        console.log(`${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        console.log(this.price + (this.price * salesTax)) ;
    }
    
}
const salesTax = 0.05;
const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pants",22.50);

product1.displayProduct();
product2.displayProduct();

product1.calculateTotal(salesTax);
product2.calculateTotal(salesTax);
