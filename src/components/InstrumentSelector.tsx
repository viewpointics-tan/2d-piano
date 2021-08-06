import React from 'react'

interface Props {
  instruments: string[]
}

const InstrumentSelector = ({ instruments }: Props): JSX.Element => {
  const options = instruments.map((instrument) => <option>{instrument}</option>)
  return <select>{options}</select>
}

export default InstrumentSelector
