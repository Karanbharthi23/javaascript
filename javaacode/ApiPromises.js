
const promise= new Promise(function (resolve,reject){
        let login=false
        if(login)
        {
            resolve({username: "Karan", password:1234});
        }
        else
        {
            reject("unsuccessfull")
        }
})
promise.then(function (data)
{
    console.log(data);
    return data.username
})
.then(function (user)
{
    console.log(user);
})
.catch(function(error){
    console.log(error)
}
)
.finally(()=>
{
    console.log("every thing work properly")
})
// async function fun(){
//     try{
//     const response=await fetch("https://api.github.com/users/karanbharthi23")
//     const data =await response.json()
//     console.log(data.login)
//     }
//     catch(error)
//     {
//         console.log(error);
        
//     }
// }
// fun()
fetch('https://api.github.com/users/karanbharthi23')
.then((response)=>{
    return response.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error)
{
    console.log(error)
})