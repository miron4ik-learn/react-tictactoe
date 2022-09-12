import Cell from './Cell'

export default class Board {
  constructor() {
    this.cells = []
  }

  initCells() {
    for(let i = 0; i < 9; i++) {
      this.cells.push(
        new Cell(this, i)
      )
    }
  }

  getCopyBoard() {
    const newBoard = new Board()
    newBoard.cells = this.cells
    return newBoard
  }
}