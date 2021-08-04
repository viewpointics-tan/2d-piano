import React from 'react'

interface Props {
  rowIndex: number
  rowLength: number
}

const Row = ({ rowIndex }: Props): JSX.Element => <div>{rowIndex}</div>

export default Row
