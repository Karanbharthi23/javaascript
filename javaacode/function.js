function fun()
{
    console.log("hello world!")
}
function usernum(...number)
{
    return "only number is not valid";
}
function usernm(username)
{
    return "you entered only username =>"+username
}
function userAc(username,number)
{
    return "your username is => "+username+" Account number is =>  "+number;
}
function xyz(arr1)
{
    return arr1
}
function abc(detail)
{
    return "basic details user "+detail.name+" roll no is "+detail.roll
}
const usn="Karan";
let num=1223232323;
const obj={
    name:"karan",
        roll:473
}
console.log(usernum(num))
console.log(userAc(usn,num));
console.log(usernm(usn));
console.log(xyz([10,20,30]))
console.log(abc(obj));
fun();