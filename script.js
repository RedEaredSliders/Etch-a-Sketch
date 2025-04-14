// create container div for grid
const container = document.createElement('div')
container.classList.add('container');

// create button element
const newGrid = document.createElement('button');
newGrid.textContent = "New grid?"

// append button and container to body
document.body.appendChild(newGrid);
document.body.appendChild(container);


// populate grid and append to container

function populateGrid(size = 16){
    let boxSize = 30 / size;

for (let i = 0; i < size**2; i++){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.id = i
    newBox.style.width = `${boxSize}vw`;
    newBox.style.height = `${boxSize}vw`;
    container.appendChild(newBox);
    }
}

populateGrid()