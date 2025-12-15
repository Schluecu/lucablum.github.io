function unlock(unlock) {
    if(document.getElementById(unlock).style.display=="inline"){
    document.getElementById(unlock+'_').style.display="inline"}else{
    document.getElementById(unlock).style.display = "inline";}
}

function load(load) {
    if(document.getElementById(load).classList.contains=="done"){
    document.getElementById(load+'_').classList.add("on");
    document.getElementById(load+'_').classList.remove("off");}else{
    document.getElementById(load).classList.add("on");
    document.getElementById(load).classList.remove("off");}
}

function lock(lock) {
    document.getElementById(lock).classList.add("done");
    document.getElementById(lock).classList.remove("on");
    document.getElementById(lock).removeAttribute("onclick");
}

function reset() {
    location.reload();
}
