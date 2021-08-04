import React from 'react'
import Key from './Key'

interface Props {
  rowIndex: number
  rowLength: number
  keyHeight: number
  keyWidth: number
}

const Row = ({
  rowIndex,
  rowLength,
  keyHeight,
  keyWidth,
}: Props): JSX.Element => {
  const style: React.CSSProperties = {
    width: `${rowLength * keyWidth}mm`,
    height: `${keyHeight}mm`,
  }
  const keys = [...Array(rowLength).keys()].map((_, index) => (
    <Key keyNumber={index} keyHeight={keyHeight} keyWidth={keyWidth} />
  ))
  return (
    <div className="flex flex-row" style={style}>
      {keys}
    </div>
  )
}

export default Row
