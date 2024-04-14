
var settingMenu = document.querySelector(".settings_menu");
var darkBtn = document.getElementById("dark_btn");

function settingsMenuToggle(){
    settingMenu.classList.toggle("settings_menu_height");
};
darkBtn.addEventListener('click', ()=>{
    darkBtn.classList.toggle("dark_btn_on");
    document.body.classList.toggle("dark_theme");


    if(localStorage.getItem("theme") == "light"){
         localStorage.setItem("theme", "dark");
    }
    else{
         localStorage.setItem("theme", "light");
    }

})
     

if(localStorage.getItem("theme") == "light"){
     darkBtn.classList.remove("dark_btn_on");
     document.body.classList.remove("dark_theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark_btn_on");
     document.body.classList.add("dark_theme");
}
else{
    localStorage.setItem("theme", "light");
};
