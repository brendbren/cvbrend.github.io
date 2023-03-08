//header toogle
let MenuBtn = document.getElementById("MenuBtn")

MenuBtn.addEventListener("click", function(e) {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark")
}
)
//typing effect
let typed = new Typed(" .auto-imput",{
    strings: ["-Developer!","& Freelancer!"],
    typedSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop: true,
})
//activa link con el scroll

//todos los links
let navLinks = document.querySelectorAll("nav ul li a")

//todas las sections
let sections = document.querySelectorAll("section")


window.addEventListener("scroll", function (){
    const scrollPost = this.window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPost > section.offsetTop && scrollPost < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
            link.classList.remove("active");
            if(section.getAttribute("id")+++ link.getAttribute("href").substring(1)){
            link.classList.add("active")
        }

    });
}
    })

});
