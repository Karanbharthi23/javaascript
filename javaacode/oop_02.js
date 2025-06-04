const fun = function (product, price){
    console.log("hello world")
        this.product = product
        this.price = price
}
fun.prototype.increment = function()
{
    this.price+=50
    console.log(`${this.price}`);
    
}
fun.prototype.PrintMe= function ()
{
    console.log(fun("Mouse",500));
    
}
const calls= new fun("Mouse",500)
calls.PrintMe();
