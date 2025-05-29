const arr=[
    {
        dp:"https://images.unsplash.com/photo-1748354340469-8ccbaeeec585?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1748259601882-013d5717ca45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1747491681738-d0ed9a30fed3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1747734786792-317d1d8e8690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1748306700474-e80b7079c577?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1747995709691-5d0cf015c991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1748015879337-ef95556c3749?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1746201329166-64cc2408ef02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        dp:"https://plus.unsplash.com/premium_photo-1747375615029-515941ee7a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1748096089012-e601d766815f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D"
    },
]
let cluster= ""
arr.forEach(function (val,index)
{

        console.log(val)
        cluster += `<div class="story11">
                <img id="${index}"src="${val.dp}" alt="">
            </div>`
}
)
document.querySelector(".story").innerHTML=cluster

document.querySelector(".story").addEventListener("click",function(event)
{
            document.querySelector(".full-screen").style.display="block"
            document.querySelector(".full-screen").style.backgroundImage= `url(${arr[event.target.id].story})`
})
