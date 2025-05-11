console.log("helo");
const shopingItems=
[
    {
    "name":"websites course",
    "price":2999
    },
    {
    "name":"dsa course",
    "price":1899
    },
    {
    "name":"html css course",
    "price":5999
    },
     {
    "name":"ethical hacking course",
    "price":8500
    },
     {
    "name":"python course",
    "price":5999
    },
]

const shopingCat =shopingItems.filter((item)=> item.price>5000 )
  const shopingtotal=shopingCat.reduce((ac,item) => ac+item.price,0,)
console.log(shopingCat);
console.log(shopingtotal);