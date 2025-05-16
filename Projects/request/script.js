const h5=document.querySelector('h5')

const addFriend=document.querySelector('#add')
var check=0
addFriend.addEventListener("click",function ()
{
    if(check===0)
    {
    h5.innerHTML="Friend"
    h5.style.color="green"
    addFriend.innerHTML="Remove friend"
    check=1;
    }
    else
    {
        h5.innerHTML="Stranger"
        h5.style.color="red"
        addFriend.innerHTML="Add Friend"

        check=0
    }
})
