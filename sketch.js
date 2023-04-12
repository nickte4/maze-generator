const canvasWidth = 400;
const canvasHeight = 400;
const gridWidth = 40;
const cols = Math.floor(canvasWidth / gridWidth);
const rows = Math.floor(canvasHeight / gridWidth);

var grid = new Array(cols);

function displayGrid(grid, gridWidth) {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show(gridWidth);
    }
  }
}

function setup() {
  // make 2-D array, col-row order
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  // add cell to each grid space
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
  console.log(grid);
}

function draw() {
  createCanvas(canvasWidth, canvasHeight);
  // color background grey
  background(51);

  displayGrid(grid, gridWidth);
}
