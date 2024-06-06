const pad = document.querySelector(".pad");
const padWidth = 500;
const padHeight = 500;

let gridSize = 16;

let colorPicker = "red";

const menu = document.querySelector("#size-menu");

menu.addEventListener("change", event => {
    while(pad.firstChild){
        pad.removeChild(pad.firstChild);
    }

    let selectedOption = event.target.value;
    console.log(selectedOption);

    if(selectedOption === "8"){
        gridSize = 8;
    }
    else if(selectedOption === "default" || selectedOption === "16"){
        gridSize = 16;
    }
    else if(selectedOption === "64"){
        gridSize = 64;
    }
    else {
        gridSize = parseInt(prompt("Enter a number between 1 and 100"));
    }

    gridMaker(gridSize);
    addEventListenerToCells();
});

function gridMaker(num) {
    for(let i = 0; i<num; i++){
        const column = document.createElement("div");
        column.classList.add("cell-column");

        column.style.width = (padWidth/num) + "px";

        pad.appendChild(column);
        for(let j = 0; j<num; j++){
            const row = document.createElement("div");
            row.classList.add("cell-row");

            row.style.height = (padHeight/num) + "px";
            row.style.flex = "1";
            column.appendChild(row);
        }
    }
}

function addEventListenerToCells() {
    const cells = document.querySelectorAll(".cell-row");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", event => {
            
            const colorDetector = document.querySelector(".color-picker");

            colorPicker = colorDetector.value;
            cell.style.backgroundColor = colorPicker;
        });
    });
}


menu.value = "default";
gridMaker(gridSize);
addEventListenerToCells();
