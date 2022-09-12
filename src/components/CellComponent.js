const CellComponent = ({ click, cell }) => {
  return (
    <div className={[ 'cell', cell.active ? 'active' : '' ].join(' ')} onClick={() => click(cell)}>
      {cell?.figure?.logo}
    </div>
  )
}

export default CellComponent