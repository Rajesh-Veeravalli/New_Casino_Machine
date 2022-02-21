
let val1=document.getElementById("val1")
let val2=document.getElementById("val2")
let val3=document.getElementById("val3")

let inp=document.getElementById('inp')

let values=['😘','😆','🤩','🥰','😎','😪','😴','😛','😅']

function randomnum(){
    return values[Math.floor(Math.random() * 8)];
}

setInterval(function( ){
    val1.innerText=randomnum();
    val2.innerText=randomnum();
    val3.innerText=randomnum();

    if(val1==val2 && val2==val3 && val3==val1){}
},300)

inp.onchange=function(eve){
    let l=eve.target.value
    document.documentElement.style.setProperty('--speed',l)
}