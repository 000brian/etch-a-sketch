let gridDimension = 4;

const container = document.querySelector("div#container");

function createGrid(gridDimension)
{
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
            square.addEventListener("mouseover", () =>
            {
                square.style.backgroundColor = "red";
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
createGrid(50);


const button = document.querySelector("button#dimension-button");
button.addEventListener("click", () =>
{
    let gridDimension = +prompt("wat dimension do u want the grid to be");
    if (gridDimension > 100)
    {
        alert("thats way too much man try again")
    }
    else if (typeof gridDimension != "number")
    {
        alert("thats not a number cmon try again")
    }
    else
    {
        container.replaceChildren();
        createGrid(gridDimension);
    }

});