export default class Cell {
  constructor(board, index, figure = null) {
    this.board = board
    this.index = index
    this.figure = null
    this.active = false
  }

  isEmpty() {
    return this.figure === null
  }

  setFigure(figure) {
    this.figure = figure
  }
}