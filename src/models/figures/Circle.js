import Figure, { FigureNames } from './Figure'

export default class Circle extends Figure {
  constructor(cell) {
    super(cell)
    this.name = FigureNames.CIRCLE
    this.logo = (
      <svg className='circle'>
        <circle
          r='45'
          cx='58'
          cy='58'
          fill='none'
          stroke='blue'
          strokeWidth='10'
          strokeLinecap='round' />
      </svg>
    )
  }
}