const board = document.querySelector('#board');
const colors = ['#00FF00', '#B22222', '#B22222', '#00FA9A', '#FF8C00', '#F0E68C', '#8A2BE2', '#7B68EE'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square) );

    square.addEventListener('mouseleave', () => removeColor(square) );

    board.append(square);
}
function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}