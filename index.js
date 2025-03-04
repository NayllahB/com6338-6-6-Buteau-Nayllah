
var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

function openMenu() {
    var isOpen = hamburgerMenu.classList.toggle('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', isOpen)
}
// calls function when hamburger button is clicked
hamburgerBtn.onclick = openMenu

// if inside of menu is NOT clicked, close menu
document.body.onclick = function(e){
    if(!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target))
    {
        hamburgerMenu.classList.remove('show-menu')
        hamburgerBtn.setAttribute('aria-expanded', false)
        hamburgerBtn.focus()
    }
    
}
// if escape key is pressed, close menu
document.onkeyup = function(e) {
    if (e.key ==='Escape') {
        hamburgerMenu.classList.remove('show-menu')
        hamburgerBtn.setAttribute('aria-expanded', false)
        hamburgerBtn.focus()
    }
}
