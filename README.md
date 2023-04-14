# Maze Generator

## About The Project

A JavaScript project that implements depth-first search using recursive backtracking to generate a maze.

## Built With

- HTML/CSS
- JavaScript
- p5.js

## Scope

The maze is generated using a depth-first search algorithm accompanied by recursive backtracking. For more info, check **Acknowledgments**.

## Description

### Depth-First Search with Recursive Backtracking

In this project, I am trying to generate a maze using a depth-first search algorithm with recursive backtracking. What does this mean?

Essentially (i.e. according to Wiki), we start with a large grid of cells--with each cell starting with four walls. Starting at a random cell, a random neighboring cell that has not been visited yet has its wall removed. The new cell is then marked as visited and is added to a stack to help with backtracking. We continue this process until it reaches a dead-end: a cell with all neighbors visited.

At this dead-end, we will backtrack through the path until we reach a cell with an unvisited neighbor--continuing the path generation by visiting this new, unvisited cell.

This process continues until every cell has been visited, causing us to backtrack all the way to the beginning cell.

### Interesting Challenges

I added a button to start the maze which is mainly an illusion where the p5 draw() function loops over a false boolean causing the maze generation to not start. Once the user presses the button, the boolean becomes true and the main loop actually starts.

## Contact

Nick Topacio - ntopacio25@gmail.com

## Acknowledgments

- [maze generation algorithm](https://en.wikipedia.org/wiki/Maze_generation_algorithm)
- [CodingTrain Challenge #10](https://www.youtube.com/watch?v=HyK_Q5rrcr4&ab_channel=TheCodingTrain)
