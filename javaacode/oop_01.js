const obj= {
    username:"Raj",
    login:true
}
function fun(username,login)
{
        this.username = username;
        this.login = login;
        return this
}
function fun2(username,login)
{
    this.username=username;
    this.login=login
    let check = 0;
    if(username&& login == true)
    {
        console.log("successfully login");
    }
    else{
    for(let i=0 ; i<=3 ; i++)
    {
        console.log("try again");
        if(check==3)
        {
            console.log("try after one hours");
            break;
        }
        check++;
    }
    }
}
const fun1 =new  fun("KARAN GOSWAMI",true)
const fun3= new fun2("Raj Chauhan",false)
console.log(fun1);
console.log(obj.username);

