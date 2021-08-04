import React from 'react'
import Row from './components/Row'

const rowNumber = 5
const rowLength = 10
const keyHeight = 20
const keyWidth = 40
const deltaX = 2
const deltaY = 3

const App = (): JSX.Element => {
  const rows = [...Array(rowNumber).keys()].map((index) => (
    <Row
      rowNumber={rowNumber}
      rowIndex={index - deltaY}
      rowLength={rowLength}
      keyHeight={keyHeight}
      keyWidth={keyWidth}
      deltaX={deltaX}
    />
  ))
  return <div className="flex flex-col w-max">{rows}</div>
}

export default App
