const myar=[1,2,3,4,5,"Karan"]
                myar.push("Goswami");
    console.log(myar);
                myar.pop();
                 myar.pop();
        console.log(myar);
            myar.shift();
            console.log(myar);
                myar.unshift(10);
                myar.unshift(11);
                console.log(myar);
                const arr=myar.join();
    //slice or splice 
    console.log("A",myar)
    const myn1= myar.slice(1,3);
    console.log("B",myar);
        const myn2=myar.splice(1,3);//that manipulate original array
        console.log("C",myn2);
        console.log(myar);
        
        
    
