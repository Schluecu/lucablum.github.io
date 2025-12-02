function unlock(unlock) {
    document.getElementById(unlock).style.display = "inline";
}

function load(load) {
    document.getElementById(load).classList.add("on");
    document.getElementById(load).classList.remove("off");
}

function lock(lock) {
    document.getElementById(lock).classList.add("done");
    document.getElementById(lock).classList.remove("on");
    document.getElementById(lock).removeAttribute("onclick");
}
