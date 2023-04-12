/* File for Cell object */
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
  show(gridWidth) {
    stroke(255);
    let w = gridWidth;
    let x = this.i * w;
    let y = this.j * w;

    // line from top left to top right
    line(x, y, x + w, y);
    // line from top right to bottom right
    line(x + w, y, x + w, y + w);
    // line from bottom right to bottom left
    line(x + w, y + w, x, y + w);
    // line from bottom left to top left
    line(x, y + w, x, y);

    // noFill();
    // rect(this.i * gridWidth, this.j * gridWidth, gridWidth - 1, gridWidth - 1);
  }
}
