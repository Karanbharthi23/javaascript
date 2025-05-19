//chatbot for doctor ai
const UserInput=document.querySelector(".User-Input").value
const Submit=document.querySelector(".submit")
const add=document.querySelector(".add")
Submit.addEventListener("click", function (e)
{
    e.preventDefault();
    function check(UserInput)
    {
        if(UserInput==="" || UserInput==null)
        {
            alert("enter valid input")
        }
   }
   check();
})