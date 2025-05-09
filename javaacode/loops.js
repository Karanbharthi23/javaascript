// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let i=0;
// while(i<=25)
// {
//     i++;
//     if(i==26)
//     {
//         continue
//     }
//     console.log(i);
// }
// let j=0;
// do{

//    console.log(j);
    
//    if(j==5)
//    {
//        break
//    }
//     j++;
// }while(j!=15)
// const map=new Map();
// map.set("name","karan")
// map.set("roll",425)
// map.set("college","KSCPAC")
// for (const element of map) {
//         console.log(element);
            
// }
const myarr=[
    {
            "name":"javascipt",
            "alias":"js"
    },
    {
        "name":"python",
        "alias":"py"
    },
    {
        "name":"C PLUS PLUS",
        "alias":"C++"
    },
    {
        "name":"CSHARP",
        "alias":"C#"
    },
]
myarr.forEach( function (item)
{
    console.log(item.name,item.alias);
    
})