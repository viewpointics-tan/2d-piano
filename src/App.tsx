import React from 'react'
import Row from './components/Row'

const rowNumber = 5
const rowLength = 10

const App = (): JSX.Element => {
  const rows = [...Array(rowNumber).keys()].map((_, index) => (
    <Row rowIndex={index} rowLength={rowLength} />
  ))
  return <div className="bg-red-300">{rows}</div>
}

export default App
