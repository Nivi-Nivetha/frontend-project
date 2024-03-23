let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener('wheel', (event) =>{
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.scrollBehaviour = "auto";
});

backBtn.addEventListener('click', () =>{
    scrollContainer.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
})

nextBtn.addEventListener('click', () =>{
    scrollContainer.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
})