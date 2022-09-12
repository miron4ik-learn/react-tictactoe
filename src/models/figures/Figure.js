export const FigureNames = {
  FIGURE: 'Фигура',
  CROSS: 'Крестик',
  CIRCLE: 'Нолик',
}

export default class Figure {
  constructor(cell) {
    this.cell = cell
    this.cell.figure = this
    this.name = FigureNames.FIGURE
    this.logo = null
  }
}