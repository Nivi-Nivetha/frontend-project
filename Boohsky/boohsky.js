let addButton = document.querySelector(".add-button")

let popupOverlay = document.getElementById("popup-overlay")
let popupBox = document.getElementById("popup-box")

addButton.addEventListener('click', () =>{
    popupOverlay.style.display = "block"
    popupBox.style.display = "block"
})

let cancelPopup = document.getElementById("cancel-popup")

cancelPopup.addEventListener('click', (event) =>{
    event.preventDefault()
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
})

let container = document.getElementById("container")
let addBook = document.getElementById("add-book")
let bookTitleInput = document.getElementById("book-title-input")
let bookAuthorInput = document.getElementById("book-author-input")
let bookDescriptionInput = document.getElementById("book-description-input")

addBook.addEventListener('click', (event) =>{
    event.preventDefault()
   let div = document.createElement("div")
   div.setAttribute("id", "book-container")
   div.innerHTML=`<h2>${bookTitleInput.value}</h2>
                  <h5>${bookAuthorInput.value}</h5>
                  <p>${bookDescriptionInput.value}</p>
                  <button onClick="del(event)"> Delete </button>`
   container.append(div)
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
})


function del(event){
    event.target.parentElement.remove()
}
  