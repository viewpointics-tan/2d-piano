import React from 'react'
import Key from './Key'
import * as math from '../util/math'

interface Props {
  rowNumber: number
  rowIndex: number
  rowLength: number
  keyHeight: number
  keyWidth: number
  deltaX: number
  deltaY: number
}

const Row = ({
  rowNumber,
  rowIndex,
  rowLength,
  keyHeight,
  keyWidth,
  deltaX,
  deltaY,
}: Props): JSX.Element => {
  const style: React.CSSProperties = {
    width: `${rowLength * keyWidth}mm`,
    height: `${keyHeight}mm`,
    left: `${(rowNumber - 1 - rowIndex) * (keyWidth / 2)}mm`,
  }
  const keys = [...Array(rowLength).keys()].map((index) => {
    const x = index - deltaX
    const y = rowIndex - deltaY
    const keyNumber =
      7 * math.quotient(x, 2) +
      (4 - math.mod(y, 2)) * math.mod(x, 2) -
      3 * math.quotient(y, 2) -
      1 * math.mod(y, 2)
    const parity = (math.mod(x, 2) === 0) !== (math.mod(y, 2) === 0)
    return (
      <Key
        keyNumber={keyNumber}
        keyHeight={keyHeight}
        keyWidth={keyWidth}
        parity={parity}
      />
    )
  })
  return (
    <div className="flex flex-row relative" style={style}>
      {keys}
    </div>
  )
}

export default Row
