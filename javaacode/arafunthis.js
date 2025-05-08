const obj={
    username : "karan",
    myfun : function(){
        console.log(`${this.username},helo `);
    }
}
function funout()
{//clouser hoisting
    const username="karanbharthi_13"
    function funin(){
        const password=123456;
        console.log(username,password);
    }
 //   console.log(password);
    funin();
}
obj.myfun()
funout()
const getfun=() => {
    console.log("helo arrow fun");
}
const sum = (num1,num2) => (num1+num2)
const sum1 = (num1,num2,num3) => (num1+num2+num3)
getfun();
console.log(sum(12,344));
console.log(sum1(12,344,123));
const sum2=(num2,num3,num4,num1)=>(num1+num2+num3+num4)
console.log(sum2(12,344,1232,33344));