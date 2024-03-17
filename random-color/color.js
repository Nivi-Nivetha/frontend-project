var btn = document.getElementById("change-color");

btn.addEventListener('click',function(){
    var randomcolor =(Math.floor(Math.random()*17654284)).toString(16);
    document.body.style.backgroundColor = "#" + randomcolor;
    var text =document.getElementById("text");
    text.innerText = "#" + randomcolor;
})