let gridDimension = 4;

const container = document.querySelector("div#container");


const square = document.createElement("div");
square.classList.toggle("square");

for (let i = 0; i < gridDimension; i++)
{
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let i = 0; i < gridDimension; i++)
    {
        const square = document.createElement("div");
        square.classList.toggle("square");
        row.appendChild(square);
    }
    container.appendChild(row);
}


