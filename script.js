let gridSize = 0;

const button = document.querySelector('button')
button.addEventListener('click', () =>{
    gridSize = prompt("Size grid");
    if(gridSize > 100){alert("Input a number less than 100!")}
    else{
            const body = document.querySelector('body');
            const oldGrid = document.querySelector('.gridHome');
            if(oldGrid !== null){body.removeChild(oldGrid)};
            updateGrid();
        };
});



function updateGrid () {
    const body = document.querySelector('body');
    const gridHome = document.createElement('div');
    gridHome.classList.add('gridHome');
    body.appendChild(gridHome)
    for (let i = gridSize; i > 0 ; i-- ){
        const collumn = document.createElement('div')
        collumn.classList.add('etch');
        collumn.addEventListener('mouseover', () => {
            collumn.classList.add('sketch');
        collumn.addEventListener('mouseout', () =>{
            collumn.classList.remove('sketch');
        });
        });
        for (let j = gridSize; j > 0; j--){
            const row = document.createElement('div');
            row.classList.add('etch');
            row.addEventListener('mouseover', () => {
                row.classList.add('sketch');
            });
            row.addEventListener('mouseout', () =>{
                row.classList.remove('sketch');
            });
            collumn.appendChild(row);
        };
        gridHome.appendChild(collumn);
    };
    gridSize = 0
};