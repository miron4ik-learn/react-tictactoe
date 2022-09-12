const CellComponent = ({ click, cell }) => {
  return (
    <div className='cell' onClick={() => click(cell)}>
      {cell?.figure?.logo}
    </div>
  )
}

export default CellComponent