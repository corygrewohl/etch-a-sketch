const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for(let j = 0; j < 16; j++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = i * j;
        row.appendChild(cell);
    }
    container.appendChild(row);
} 