import React from 'react'

interface Props {
  keyNumber: number
  keyHeight: number
  keyWidth: number
}

const Key = ({ keyNumber, keyHeight, keyWidth }: Props): JSX.Element => {
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
        className="flex-shrink-0 rounded-lg h-full bg-yellow-200 shadow-md"
        style={keyStyle}
      >
        {keyNumber}
      </div>
    </div>
  )
}

export default Key
