const prompt = require("prompt-sync")();
const depo = () => 
{
    while(true)
    {
        const depAM=prompt("Enter any value ");
        const number=parseInt(depAM);
        if(isNaN(number) || number <= 0 )
        {
            console.log("invalid entered ");
        }
        else
        {
        return number;
        }
            
    }
}
// const num = () => 
//     {
//         while(true)
//         {
//             const numeric=prompt("amount of bet ");
//             const numbers=parseInt(numeric);
//             if(isNaN(numbers) || numbers <= 0 ||  numbers >3)
//             {
//                 console.log("invalid entered ");
//             }
//             else
//             {
//             return numbers;
//             }
                
//         }
//     }

const num = () => 
{
    while(true)
    {
    const numer=prompt("Enterr any bet  amout select between 1 -3  ");
    const Changenum=parseInt(numer);
    if (isNaN(Changenum) || Changenum <=0 || Changenum >3)
    {
        console.log("invalid entered");
    }
    else
    {
        return Changenum;
    }
    }
}
console.log(depo());
console.log(num());
