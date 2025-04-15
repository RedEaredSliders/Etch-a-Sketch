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
    container.innerHTML = '';
    let boxSize = 960 / size

for (let i = 0; i < size**2; i++){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.id = i
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    container.appendChild(newBox);
    }
}





// allow user to enter a value for new grid size
function setGridSize(){
    let newGridSize = 0;
    
    while (newGridSize < 2 || newGridSize > 100){
        newGridSize = prompt('Please enter the desired grid size (value must be between 2 and 100)');
    }
    newGridSize = parseInt(newGridSize);
    return newGridSize;
    
}

// box changes color when hovered over
function setBoxListeners(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.opacity = 0;
        box.addEventListener('mouseenter', () => {
            let opacity = parseFloat(box.style.opacity)
            box.style.backgroundColor = `rgb(${randRGBVal()}, ${randRGBVal()}, ${randRGBVal()})`;
            if (opacity < 1){
                box.style.opacity = (opacity + 0.1).toFixed(1);
            }
    })
        box.addEventListener('mousedown', (event) => {
            mouseDown = true;
            eraser(event);
        });

        box.addEventListener('mouseup', () => {
            mouseDown = false;
        });

        box.addEventListener('mousemove', (event) => {
            if (mouseDown){
                eraser(event);
            }
        });
})

}



// add listener to new grid button
newGrid.addEventListener('click', () =>{
    populateGrid(setGridSize());
    setBoxListeners();
})


// generate a random RGB value
function randRGBVal(){
    let color = Math.random() * 256;
    return color;
}

// erasing function
function eraser(event){
    event.target.style.opacity = 0;
    
}

let mouseDown = false;


window.addEventListener('mouseup', () => {
    mouseDown = false;
})


populateGrid()
setBoxListeners()