import React from 'react'
import * as math from '../util/math'

interface Props {
  keyNumber: number
  keyHeight: number
  keyWidth: number
  parity: boolean
}
const noteName = [
  'C',
  'C♯',
  'D',
  'D♯',
  'E',
  'F',
  'F♯',
  'G',
  'G♯',
  'A',
  'A♯',
  'B',
]

const Key = ({
  keyNumber,
  keyHeight,
  keyWidth,
  parity,
}: Props): JSX.Element => {
  const boxStyle: React.CSSProperties = {
    width: `${keyWidth}mm`,
    height: `${keyHeight}mm`,
  }
  const keyStyle: React.CSSProperties = {
    width: '95%',
    height: '90%',
  }
  return (
    <div style={boxStyle}>
      <div
        className={`flex-shrink-0 rounded-lg h-full shadow-lg flex justify-evenly items-center ${
          parity ? 'bg-white' : 'bg-yellow-200'
        }`}
        style={keyStyle}
      >
        <div className="text-2xl font-serif">
          {keyNumber}
        </div>
        <div className="text-3xl font-serif">
          {noteName[math.mod(keyNumber, 12)]}
        </div>
      </div>
    </div>
  )
}

export default Key
