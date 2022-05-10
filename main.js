const toolbar = document.getElementById("toolbar")
const menuimage = document.getElementById("menuimage")
menuimage.addEventListener("click", function() {
    // toolbar.classList.add("mobile-open")
    toolbar.classList.toggle("mobile-open")
})

document.querySelectorAll("#header-nav a").forEach(element => {
    element.addEventListener('click', () => {
        toolbar.classList.remove("mobile-open")
    })
})


const menuClose = document.getElementById("menu-close")
menuClose.addEventListener("click", function() {
    toolbar.classList.remove("mobile-open")
})