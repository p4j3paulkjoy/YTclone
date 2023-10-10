var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var section = document.querySelector(".section");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    section.classList.toggle("large-section");
}

