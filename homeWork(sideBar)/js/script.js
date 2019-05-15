

var sideBar = document.getElementById("page-wrapper");


var closeButton = document.querySelector(".btnClose");
closeButton.addEventListener("click", function closeNav() {
    sideBar.style.visibility = " hidden";
    sideBar.style.width = "0";
    sideBar.style.transition = "0.5s";
    sideBar.style.transitonTimingFunction = "linear";
});


var openButton = document.querySelector(".btnOpen");
openButton.addEventListener("click", function openNav() {
    sideBar.style.visibility = " visible";
    sideBar.style.transition = "0.5s";
    sideBar.style.transitonTimingFunction = "linear";
    sideBar.style.width = " 260px";
    
});


