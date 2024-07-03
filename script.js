function lightson() {
    const button = document.getElementById("btnon");
    const bulb = document.getElementById("off");

    if (bulb.src.includes("bulb/Broken.webp")) {
        alert ("The Bulb is Broken! Press Reset");
    }else if(bulb.src.includes("bulb/Off.webp")) {
        bulb.src = "bulb/On.webp";
        button.innerText = "Off";
    }else{
        bulb.src = "bulb/Off.webp";
        button.innerText = "On";
    }
}
function breakbulb() {
    const broken = document.getElementById("off");
    const bulb = document.getElementById("off")

    if (bulb.src.includes("bulb/Off.webp") || bulb.src.includes("bulb/On.webp")) {
        broken.src = "bulb/Broken.webp";
    }else{
        alert("Already Broken! Press Reset");
    }
}
function reset() {
    document.getElementById("off").src = "bulb/Off.webp";
    const reset = document.getElementById("reset");

}
