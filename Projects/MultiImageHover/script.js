const man=document.querySelectorAll(".elem")

man.forEach(function (val)
{
       console.log(val.childNodes[3])
       val.addEventListener("mouseenter",function()
    {
        val.childNodes[3].style.opacity=1;
    });
        val.addEventListener("mouseleave",function()
    {
        val.childNodes[3].style.opacity=0
    });
        val.addEventListener("mousemove",function(event)
    {
        val.childNodes[3].style.left= event.x+"px";
        val.childNodes[3].style.top= event.y+"px";
    })
})