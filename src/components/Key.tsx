import React from 'react'

interface Props {
  keyNumber: number
  keyHeight: number
  keyWidth: number
  parity: boolean
}

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
        className={`flex-shrink-0 rounded-lg h-full shadow-lg ${
          parity ? 'bg-white' : 'bg-yellow-200'
        }`}
        style={keyStyle}
      >
        {keyNumber}
      </div>
    </div>
  )
}

export default Key
