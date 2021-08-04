import React from 'react'

interface Props {
  keyNumber: number
  keyHeight: number
  keyWidth: number
}

const Key = ({ keyNumber, keyHeight, keyWidth }: Props): JSX.Element => {
  const style: React.CSSProperties = {
    width: `${keyWidth}mm`,
    height: `${keyHeight}mm`,
  }
  return (
    <div className="flex-shrink-0" style={style}>
      {keyNumber}
    </div>
  )
}

export default Key
