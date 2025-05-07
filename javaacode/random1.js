function getarray()
{
    const obj={
        name:"karan",
        rollno: 473,
    }
    console.log(obj.name)
    console.log(obj.rollno)
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    const {name:nm}=obj;
    console.log(nm);
    
// let arr=[1,2,3,4,5]
// const arr1=["karan",123];
// console.log(arr,arr1);
// arr.push(4);
// arr1.pop();
// console.log(arr,arr1);
// arr.shift();
// arr1.shift();
// arr1.unshift(123)
// arr.unshift(12)

// console.log(arr,arr1);
// arr1.toString();
// console.log(arr,arr1);
// for(let i=0;i<10;i++)
//     {
//         arr.push(i);
//     }
//     for(i=0;i<10;i++)
//     {
//         arr1.unshift(i);
//     }
//     console.log(arr,arr1);

}
getarray
getarray();