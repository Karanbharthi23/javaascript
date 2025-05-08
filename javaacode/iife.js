(function fun1(){
    console.log("hello iife");
}
)();
(  (name) => {
    console.log(`again hello iife using arraw ,${name}`)
}

)("karan");