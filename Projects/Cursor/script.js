const main=document.querySelector(".main")
const crsr=document.querySelector(".cursor")

main.addEventListener("mousemove",function(event)
{
    crsr.style.left= event.x+"px";
    crsr.style.top= event.y+"px"
})
