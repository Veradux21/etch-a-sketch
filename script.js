let gridSize = 16;

const button = document.querySelector('button')
button.addEventListener('click', () =>{
    updateGrid();
});



function updateGrid () {
    const body = document.querySelector('body')
    const gridHome = document.createElement('div')
    body.appendChild(gridHome)
    for (let i = gridSize; i > 0 ; i-- ){
        const collumn = document.createElement('div')
        collumn.classList.add('etch')
        collumn.addEventListener('mouseover', () => {
            collumn.classList.remove('etch');
            collumn.classList.add('sketch');
        });
        for (let j = gridSize; j > 0; j--){
            const row = document.createElement('div')
            row.classList.add('etch')
            row.addEventListener('mouseover', () => {
                row.classList.remove('etch');
                row.classList.add('sketch');
            });
            collumn.appendChild(row);
        };
        gridHome.appendChild(collumn)
    };
    gridSize = 0
};