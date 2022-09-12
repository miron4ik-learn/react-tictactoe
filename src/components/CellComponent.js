const CellComponent = ({ cell }) => {
  return (
    <div className='cell'>
      {cell?.figure?.logo}
    </div>
  )
}

export default CellComponent