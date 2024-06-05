const pad = document.querySelector(".pad");
const padWidth = pad.offsetWidth;
const padHeight = pad.offsetHeight;
console.log(padWidth);
console.log(padWidth/16);

for(let i = 0; i<16*16; i++){
    const element = document.createElement("div");
    element.classList.add("cell");

    element.style.width = (padWidth/16) + "px";
    element.style.height = (padHeight/16) + "px";

    pad.appendChild(element);
    console.log(element.offsetWidth);
}