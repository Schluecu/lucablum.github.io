function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("yes");
  var z = document.getElementById("dot");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display="inline-block";
    z.style="font-size:5vw;-webkit-text-stroke-width: 0;";
  } else {
    y.style.display="none";
    z.style="font-size:5vw; color: transparent;-webkit-text-stroke-width: calc(3.5vmax/50);";
    x.style="width:20vw;padding-top:5vw;display:block; float:left; color: transparent;-webkit-text-stroke-width: calc(3.5vmax/50);";
  }
}

function openDesc(theid) {
  var x = document.getElementById(theid);
  if (x.style.display === "none") {x.style.display = "block";}
  else {x.style.display = "none";}}

var selectors = document.getElementsByClassName('selectSkill');
var selecting = Array(selectors.length);
var active = Array(selectors.length);
var firsttime = 0;
function filti(element) {
  if(firsttime === 0){
    firsttime++;
    for(var i=0, len=selectors.length; i<len; i++){
      selecting[i]=selectors[i].id;
      active[i]=false;
    }filti(element);}else{
  var lmnt = document.getElementsByClassName(element);
  var stil = document.getElementById(element);
  if (element==='reset'){
    reset();
  }else{
    if(active[selecting.indexOf(element)] == true){
      reset();
      active[selecting.indexOf(element)]=false;
    }else{
    for (var i=0, len=selectors.length; i<len; i++){
      selectors[i].style.fontFamily="ABC Otto Variable Edu Regular";
      stil.style.fontFamily="ABC Otto Variable Edu Light Italic";
      lemenent(lmnt);
    }
    active[selecting.indexOf(element)]=true;
    for(var i=0, len=selectors.length; i<len; i++){
      active[i]=false;
    }
    active[selecting.indexOf(element)]=true;
    }
  }}
  console.log('active-check:', active);
}

function lemenent(emelent) {
  var skills=document.getElementsByClassName('skill');
  for (var i=0, len=skills.length; i<len;i++){
    skills[i].style.display="none"
  }
  for(var i=0, len=emelent.length; i<len; i++) {
    emelent[i].style.display = "inline-flex";
}}

function reset() {
  var skills = document.getElementsByClassName('skill');
  for(var i=0, len=skills.length; i<len; i++) {
    skills[i].style.display = "inline-flex";
  }
  for (var i=0, len=selectors.length; i<len; i++){
    selectors[i].style.fontFamily="ABC Otto Variable Edu Light Italic";
  }
}
