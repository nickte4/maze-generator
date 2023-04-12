const canvasWidth = 600;
const canvasHeight = 600;
const gridWidth = 40;
const cols = Math.floor(canvasWidth / gridWidth);
const rows = Math.floor(canvasHeight / gridWidth);

var mazeStarted = false;
var button;
var grid = new Array(cols);
var current; // current cell being visited
var stack = [];

// displays each grid space
function displayGrid(grid, gridWidth) {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show(gridWidth);
    }
  }
}

// removes walls on cells depending on start to end traversal
function removeWalls(current, next) {
  let topIdx = 0,
    rightIdx = 1,
    bottomIdx = 2,
    leftIdx = 3;

  // if curr -> next
  if (current.i - next.i == -1) {
    current.walls[rightIdx] = false;
    next.walls[leftIdx] = false;
  }
  // if next <- curr
  if (current.i - next.i == 1) {
    current.walls[leftIdx] = false;
    next.walls[rightIdx] = false;
  }
  // if curr v next
  if (current.j - next.j == -1) {
    current.walls[bottomIdx] = false;
    next.walls[topIdx] = false;
  }
  // if curr ^ next
  if (current.j - next.j == 1) {
    current.walls[topIdx] = false;
    next.walls[bottomIdx] = false;
  }
}

function setup() {
  // frameRate(40);

  // style create maze button
  button = createButton("Create maze");
  button.size(150, 50);
  button.style("background-color", color(50, 250, 150));
  button.position(windowWidth / 2.2, canvasHeight + 20);
  button.mousePressed(() => (mazeStarted = true));

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

  // make first cell the current cell
  current = grid[0][0];
}

function draw() {
  createCanvas(canvasWidth, canvasHeight);
  // color background grey
  background(51);

  if (mazeStarted) {
    // change button to light red
    button.style("background-color", color(200, 150, 150));
    // display grid.
    displayGrid(grid, gridWidth);
    current.visited = true;
    current.highlight(gridWidth);

    // perform DFS algorithm to create maze
    var next = current.checkNeighbors();
    if (next) {
      next.visited = true;
      stack.push(current);
      removeWalls(current, next);
      current = next;
    } else if (stack.length > 0) {
      current = stack.pop();
    } else {
      console.log("CREATED MAZE!");
      noLoop();
    }
  }
}
