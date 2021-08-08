const topBtn = document.getElementById('top-site')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block"
    } else {
        topBtn.style.display = "none"
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0
}

const collapsible = document.getElementById("menu")
const menuBtn = document.getElementById('menuBtn')

function expandMenu() {
    collapsible.classList.toggle('expanded')
    menuBtn.classList.toggle('active')
}