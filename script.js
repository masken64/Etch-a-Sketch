const gridContainer = document.querySelector('#sketchPad');
const rows = 50;//prompt("Enter size of your sketchpad (1-100)", "");
const pixelGap = '0px';
let currColor = 'black';

//color picker logic
const black = document.querySelector('#black');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const orange = document.querySelector('#orange');
const red = document.querySelector('#red');
const violet = document.querySelector('#violet');
const yellow = document.querySelector('#yellow');
const random = document.querySelector('#randomise');
black.addEventListener('click',function(){
    console.log('black');
    currColor = 'black';
});
blue.addEventListener('click',function(){
    console.log('blue');
    currColor = 'blue';
});
green.addEventListener('click',function(){
    console.log('green');
    currColor = 'green';
});
orange.addEventListener('click',function(){
    console.log('orange');
    currColor = 'orange';
});
red.addEventListener('click',function(){
    console.log('red');
    currColor = 'red';
});
violet.addEventListener('click',function(){
    console.log('violet');
    currColor = '#683484';
});
yellow.addEventListener('click',function(){
    console.log('yellow');
    currColor = 'yellow';
});


// Set gridContainer styles
gridContainer.style.display = 'flex';
gridContainer.style.flexWrap = 'wrap';
gridContainer.style.height = '600px';
gridContainer.style.width = '600px';

for(let i = 0; i < rows * rows; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.border = '1px solid gray';
    pixel.style.flexBasis = `calc(100% / ${rows} - ${parseFloat(pixelGap) * 2}px)`; 
    pixel.style.height = `calc(100% / ${rows} - ${parseFloat(pixelGap) * 2}px)`;
    pixel.style.width = `calc(100% / ${rows} - ${parseFloat(pixelGap) * 2}px)`;  
    pixel.style.boxSizing = 'border-box'; 
    pixel.style.margin = pixelGap; 
    gridContainer.appendChild(pixel);
}

const pixel = document.querySelectorAll('.pixel');
pixel.forEach((pixel) => {
    pixel.addEventListener('mousemove', () => {
        console.log('Mouse down on pixel');
        pixel.style.backgroundColor = `${currColor}`;
    });
});

const reloadPage = document.querySelector('#reset');
reloadPage.addEventListener('click', function() {
    location.reload();
});

reloadPage.addEventListener('mouseover', function() {
    reloadPage.style.cursor = 'pointer';
});

reloadPage.addEventListener('mouseout', function() {
    reloadPage.style.cursor = 'default';
});
