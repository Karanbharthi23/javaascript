const student = {
    cls:"A",
    rollno:181,
    clg: "kscpac"
}
const teacher = {
    name:"hitesh chaudhary",
    language : "javascript",
    __proto__ :student
}
const collage = {
    department : "BCA",
    staff:30,
    cantine : 1
}
const facility = {
    Transopt : true,
    ground : true
}
Object.setPrototypeOf(collage,teacher)
Object.setPrototypeOf(facility,collage)
console.log(teacher.cls);
console.log(collage.name);
console.log(facility.ground);

const name = "Karan      "
Object.prototype.setLength = function()
{
    console.log(`${this.toUpperCase()}`);
    console.log(`${this.trim().length}`);    
}
name.setLength()


