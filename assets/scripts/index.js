const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
    loader.classList.add('fondu-out');
});

const arrow = document.querySelectorAll(".arrow");
for(var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".toggle");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});