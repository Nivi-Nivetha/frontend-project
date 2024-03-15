var showbtn = document.getElementById("showbtn");


showbtn.addEventListener("click",function(){
    var overlay = document.getElementById("overlay");
    var popupbox = document.getElementById("popupbox");

    overlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtn = document.getElementById("cancelbtn");

cancelbtn.addEventListener("click",function(){
       overlay.style.display="none"
       popupbox.style.display="none"
})