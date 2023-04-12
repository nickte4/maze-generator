/* File for Cell object */
class Cell {
  constructor(i, j) {
    this.i = i; // x
    this.j = j; // y
    // [top, right, bottom, left]
    this.walls = [true, true, true, true];
    this.visited = false; // tracks if visited
  }
  show(gridWidth) {
    stroke(255);
    let w = gridWidth;
    let x = this.i * w;
    let y = this.j * w;

    // top wall
    if (this.walls[0]) line(x, y, x + w, y);
    // right wall
    if (this.walls[1]) line(x + w, y, x + w, y + w);
    // bottom wall
    if (this.walls[2]) line(x + w, y + w, x, y + w);
    // left wall
    if (this.walls[3]) line(x, y + w, x, y);

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  }
  checkNeighbors() {
    var neighbors = [];
    // cell above
    if (this.j > 0) {
      var top = grid[this.i][this.j - 1];
      if (!top.visited) neighbors.push(top);
    }
    // cell to right
    if (this.i < cols - 1) {
      var right = grid[this.i + 1][this.j];
      if (!right.visited) neighbors.push(right);
    }
    // cell below
    if (this.j < rows - 1) {
      var bottom = grid[this.i][this.j + 1];
      if (!bottom.visited) neighbors.push(bottom);
    }
    // cell to left
    if (this.i > 0) {
      var left = grid[this.i - 1][this.j];
      if (!left.visited) neighbors.push(left);
    }
    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return null;
    }
  }
}
