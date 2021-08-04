import React from 'react'
import Row from './components/Row'

const rowNumber = 5
const rowLength = 10
const keyHeight = 20
const keyWidth = 40

const App = (): JSX.Element => {
  const rows = [...Array(rowNumber).keys()].map((_, index) => (
    <Row
      rowIndex={rowNumber - 1 - index}
      rowLength={rowLength}
      keyHeight={keyHeight}
      keyWidth={keyWidth}
    />
  ))
  return <div className="flex flex-col w-max">{rows}</div>
}

export default App
