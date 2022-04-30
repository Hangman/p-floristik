function changeCss () {
    var oldFontSize = "22px";
    var newFontSize = "16px";
    var oldLogoWidth = "100px";
    var newLogoWidth = "50px";
    var oldLogoHeight = "80px";
    var newLogoHeight = "40px";

    var container = document.getElementById("topnav-sticky-container");
    var logo = document.getElementById("topnav-logo");
    var link1 = document.getElementById("navbar-link-1");
    var link2 = document.getElementById("navbar-link-2");
    var link3 = document.getElementById("navbar-link-3");
    var link4 = document.getElementById("navbar-link-4");
    var link5 = document.getElementById("navbar-link-5");

    if (this.scrollY > 100) {
        container.style.borderBottom = "3px solid #3C841F30";
        logo.style.width = newLogoWidth;
        logo.style.height = newLogoHeight;
        link1.style.fontSize = newFontSize;
        link2.style.fontSize = newFontSize;
        link3.style.fontSize = newFontSize;
        link4.style.fontSize = newFontSize;
        link5.style.fontSize = newFontSize;
    } else if (this.scrollY < 10) {
        container.style.borderBottom = "0px solid #3C841F00";
        logo.style.width = oldLogoWidth;
        logo.style.height = oldLogoHeight;
        link1.style.fontSize = oldFontSize;
        link2.style.fontSize = oldFontSize;
        link3.style.fontSize = oldFontSize;
        link4.style.fontSize = oldFontSize;
        link5.style.fontSize = oldFontSize;

    }
}
  
window.addEventListener("scroll", changeCss , false);