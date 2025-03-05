const str=["KARAN","VIVEK","RAJ","JUG"]
const str1=["GOSWAMI","KARIA","CHAUHAN","KABARIYA"]
const ar=str.concat(str1)
console.log(ar);
    const are=[...str1,...str];//best method ever
    console.log(are);
    const ano=[1,2,3,4,[5,6,7],8,8,[[23,4,4,5,]]]
const ano1=ano.flat(Infinity);
console.log(ano1);
console.log(Array.isArray("KaRAn"));
console.log(Array.from("KARAN"));
console.log(Array.from({name : "KARAN"}));

console.log(Array.of(str,str1));



