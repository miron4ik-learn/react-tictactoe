import Cell from './Cell'
import { FigureNames } from './figures/Figure'

export default class Board {
  constructor() {
    this.cells = []

    // Конец игры
    this.end = false

    // Выигрышные комбинации
    this.combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  initCells() {
    for(let i = 0; i < 9; i++) {
      this.cells.push(
        new Cell(this, i)
      )
    }
  }

  win() {
    for(const comb of this.combinations) {
      const cells = comb.map(index => this.cells[index])

      const winCross = cells.every(cell => cell?.figure?.name === FigureNames.CROSS)
      const winCircle = cells.every(cell => cell?.figure?.name === FigureNames.CIRCLE)

      if(winCross || winCircle) {
        this.end = true
        cells.forEach(cell => cell.active = true)
      }

      if(winCross) return 'cross'
      else if(winCircle) return 'circle'
    }

    const draw = this.cells.every(cell => !cell.isEmpty())
    if(this.cells.length > 0 && draw) {
      this.end = true
      return 'draw'
    }

    return false
  }

  getCopyBoard() {
    const newBoard = new Board()
    newBoard.cells = this.cells
    return newBoard
  }
}