// to show nav links when hamburger icon is clicked
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");

hamburger.addEventListener("click" ,open)

function open () {
    navList.classList.toggle("open")
}

// to remove open class when an nav link is clicked
const menu = document.querySelectorAll(".nav_list__item")

menu.forEach((link)=>{
    link.addEventListener("click", removeOpen)

    function removeOpen(e){
        navList.classList.remove("open")
    }
})
