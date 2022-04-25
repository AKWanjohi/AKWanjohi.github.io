const topSiteBtn = document.getElementById("top-site");

window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    topSiteBtn.style.display = "block";
  } else {
    topSiteBtn.style.display = "none";
  }
}

topSiteBtn.onclick = goToTop;

function goToTop() {
  document.documentElement.scrollTop = 0;
}

const collapsible = document.getElementById("menu");
const menuBtn = document.querySelector(".nav-button");

menuBtn.onclick = expandMenu;

function expandMenu() {
  collapsible.classList.toggle("expanded");
  menuBtn.classList.toggle("active");
}

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  form.submit();
  setTimeout(() => {
    form.reset();
  }, 1000);
});
