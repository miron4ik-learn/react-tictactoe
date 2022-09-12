import Figure, { FigureNames } from './Figure'

export default class Cross extends Figure {
  constructor(cell) {
    super(cell)
    this.name = FigureNames.CROSS
    this.logo = (
      <svg className='cross'>
        <line
          className='first'
          x1='15'
          y1='15'
          x2='100'
          y2='100'
          stroke='red'
          strokeWidth='10'
          strokeLinecap='round' />
        <line
          className='second'
          x1='100'
          y1='15'
          x2='15'
          y2='100'
          stroke='red'
          strokeWidth='10'
          strokeLinecap='round' />
      </svg>
    )
  }
}