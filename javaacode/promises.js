let ans= new Promise(function (res,rej){
        let num=Math.floor(Math.random()* 10)
        if( num < 5 )
        {
                return res(num);
        }
        else
        {
            return rej(num);
        }
})
ans.then(function (n){
    console.log("Smaller "+n)
})
.catch(function (n){
    console.log("larger "+n)
})