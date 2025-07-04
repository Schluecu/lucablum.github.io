function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("yes");
  var z = document.getElementById("dot");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="inline-block";
    z.style="color: black;-webkit-text-stroke-width: 0;font-size:5vw;"
  } else {
    x.style.display = "block";
    x.style.float = "left";
    y.style.display="none";
    z.style="color: transparent;-webkit-text-stroke-color: black;-webkit-text-stroke-width: calc(3.5vmax/50);"
    x.style="color: transparent;-webkit-text-stroke-color: black;-webkit-text-stroke-width: calc(3.5vmax/50);"
  }
}
function openDesc1() {var x = document.getElementById("desc1");if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}}
function openDesc2() {var x = document.getElementById("desc2");if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}}
function openDesc3() {var x = document.getElementById("desc3");if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}}
function openDesc4() {var x = document.getElementById("desc4");if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}}
  
