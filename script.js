const pad = document.querySelector(".pad");
const padWidth = 400;
const padHeight = 400;

let gridSize = 16;

gridMaker(gridSize);

function gridMaker(num) {
    for(let i = 0; i<num; i++){
        const column = document.createElement("div");
        column.classList.add("cell-column");

        column.style.width = (padWidth/num) + "px";

        pad.appendChild(column);
        for(let j = 0; j<num; j++){
            const row = document.createElement("div");
            row.classList.add("cell-row");

            row.style.height = (padHeight/num) + "p";
            row.style.flex = "1";
            column.appendChild(row);
        }
    }
}
