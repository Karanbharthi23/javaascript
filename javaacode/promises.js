// let ans= new Promise(function (res,rej){
//         let num=Math.floor(Math.random()*100)
//         // let num=-2
//         if( num >=0)
//         {
//                 return res(num);
//         }
//         else
//         {
//             return rej(num);
//         }
// }) 
// ans.then(function (n){
//     console.log("valid number "+n)
//     return new Promise(function(res,rej){
//         if(n/2)
//         {
//                 return res(n)
//         }
//         else
//         {
//             return rej(n)
//         }
//     });
// })
// .catch(function (n){
//     console.log("rejected "+n)
// })
// ans.then(function (num){     
//        console.log(num+" even")
// })
// .catch(function (num){
//     console.log(num+ " odd ");
// })
let promis= new Promise(function (res,rej){
    return res("Work one done")
    })
let promis2=promis.then(function (data)
{
    console.log(data)
   return new Promise(function (res,rej){
        return res("Work 2 now on a way")
})
})
let promis3 = promis2.then(function (data){
    console.log(data);
    return new Promise(function (res,rej)
{
        return res("Work 3 is now coming")
})
})                          
let promis4 = promis3.then(function (data){
    console.log(data)
    return  new Promise(function (res,rej)
{
        return res(" work 4 is now come")
})
})
let promis5 = promis4.then(function  (data)
{
    console.log(data);
    return new Promise(function (res,rej)
{
        return res("hello all are gangstar until the real one comes task 5")
})
}) 
let promis6=promis5.then(function (data)
{
        console.log(data);
        
})
let promise7=promis6.then(function (data){
    console.log(data);
    return new Promise(function (res,rej )
{
    return res("This is worrk six task done")
})
    
})
promise7.then(function (data)
{
    console.log(data);
    
})
