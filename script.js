function lightson() {
    const button = document.getElementById("btnon");
    const bulb = document.getElementById("off");

    if (bulb.src.includes("/bulb/Broken.png")) {
        alert ("The Bulb is Broken! Press Reset");
    }else if(bulb.src.includes("/bulb/Off.png")) {
        bulb.src = "/bulb/On.png";
        button.innerText = "Off";
    }else{
        bulb.src = "/bulb/Off.png";
        button.innerText = "On";
    }
}
function breakbulb() {
    const broken = document.getElementById("off");
    const bulb = document.getElementById("off")

    if (bulb.src.includes("/bulb/Off.png") || bulb.src.includes("/bulb/On.png")) {
        broken.src = "/bulb/Broken.png";
    }else{
        alert("Already Broken! Press Reset");
    }
}
function reset() {
    document.getElementById("off").src = "/bulb/Off.png";
    const reset = document.getElementById("reset");

}