/**
 * INITIAL GRID AND SETUP
 */
const container = document.querySelector('.container');
const defaultSize = 16;

let size = 16;
let rgbToggle = 1;
let color = '#000000'

if(size == null){
    console.log('size is null')
    size = defaultSize
}

gridMaker(size)

/**
 * SLIDER
 */
const slider = document.getElementById("cellSlider")
const output = document.getElementById("cellNum")
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.onchange = function() {

    size = output.textContent
    console.log(size)

    container.innerHTML = '';
    gridMaker(size)
}

/**
 * COLOR PICKER BUTTON
 */
const colorPicker = document.getElementById('picker')
colorPicker.value = color

colorPicker.addEventListener('input', () => {
    color = colorPicker.value
})

/**
 * RGB BUTTON
 */
const rgbBtn = document.getElementById('rgb')

rgbBtn.addEventListener('click', () => {
    rgbToggle *= -1;
    if(rgbToggle == -1){
        rgbBtn.innerHTML = "RGB ON"
    } else  if(rgbToggle == 1){
        rgbBtn.innerHTML = "boring"
    }
    console.log(rgbToggle)
})

/**
 * RESET BUTTON
 */
const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', () => {
    const cellList = document.querySelectorAll('.cell');
    for(let i = 0; i < cellList.length; i++){
        cellList[i].style.background = 'white';
    }
})

/**
 * GRID MAKER FUNCTION
 */
 function gridMaker () {
    for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for(let j = 0; j < size; j++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = i + '-' + j;
        cell.addEventListener('mouseover', () => {
            if(rgbToggle == -1){
                let rgbString = rgb(Math.random() * 256, Math.random() * 256, Math.random() * 256)
                cell.style.background = rgbString;
            } else {
                cell.style.background = color;
            }
        });
        row.appendChild(cell);
    }
        container.appendChild(row);
    } 
}

/**
 * RGB MAKER
 */

function rgb(r, g, b){
    return "rgb(" + r + "," + g + "," + b + ")"; 
}