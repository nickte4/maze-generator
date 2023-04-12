/* File for Cell object */
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    // [top, right, bottom, left]
    this.walls = [true, true, true, true];
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

    // noFill();
    // rect(this.i * gridWidth, this.j * gridWidth, gridWidth - 1, gridWidth - 1);
  }
}
