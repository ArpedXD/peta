var nav = document.getElementById("nav");
var settings = document.getElementById("settings");
var set = document.getElementById("set");
let st1 = 0;
let st2 = 0;

function sett(){
    if(st1 == 0){
        set.style.transform = "rotateZ(-90deg)";
        settings.style.top = "3.3em";
        st1++;
    }else{
        set.style.transform = "rotateZ(0deg)";
        settings.style.top = "-6em";
        st1--;
    }
}