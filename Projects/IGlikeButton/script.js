var con=document.querySelector("#container")
var love=document.querySelector("i")

con.addEventListener("dblclick",function(e)
{
    love.style.transform=' translate(-50%,-50%)scale(0.8)';
    love.style.opacity=0.8
    setTimeout(function(){
        love.style.opacity=0;
    },1000)
    setTimeout(function(){
        love.style.transform=' translate(-50%,-50%)scale(0)';
    },3000)
})
