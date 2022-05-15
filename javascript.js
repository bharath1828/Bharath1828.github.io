var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

document.getElementById("resume").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("resume").innerHTML = "YOU CLICKED ME!";
}