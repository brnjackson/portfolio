// reveal = () => {
//     var reveals = document.querySelectorAll(".reveal")
    
//     for(let i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight
//         var elementTop = reveals[i].getBoundingClientRect().top
//         var elementVisible = 150

//         if(elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("active")}
//             else {
//                 reveals[i].classList.remove("active")
//             }

//         }
//     }





// window.addEventListener("scroll", reveal)

// document.getElementById('dark_mode').addEventListener("click", () => {
//     document.getElementById("hero").style.backgroundColor = "#030302";
//     document.getElementById("name").style.color = "#3CAFE8"
//     document.getElementById("title").style.color = "white"
// })
// document.getElementById('light_mode').addEventListener("click", () => {
//     document.getElementById("hero").style.backgroundColor = "white"
//     document.getElementById("name").style.color = "black"
//     document.getElementById("title").style.color = "black"
    
// })

document.getElementById('hamburger').addEventListener("click", () => {
    let navbar = document.getElementById('navbar').style

    navbar.display = "block";
    navbar.backgroundColor = "black";
    navbar.width = "100vw"
    navbar.textAlign = "center"
    navbar.marginTop = 0
    navbar.height = "20vh"
    
})

document.getElementById('menu_close').addEventListener("click", () => {
    document.getElementById('navbar').style.display = "none";
})