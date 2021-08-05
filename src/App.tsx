import React from 'react'
import SoundFont from 'soundfont-player'
import Row from './components/Row'

const rowNumber = 5
const rowLength = 10
const keyHeight = 20
const keyWidth = 40
const deltaX = 2
const deltaY = 3

const ac = new AudioContext()

const App = (): JSX.Element => {
  const playSound = {
    noteOn: (keyNumber: number) =>
      SoundFont.instrument(ac, 'acoustic_grand_piano')
        .then((inst) => inst.play(`${keyNumber}`, ac.currentTime, { gain: 20 }))
        .catch((err) => {
          console.log(err)
        }),
    noteOff: (instPromise: Promise<void | SoundFont.Player>) => {
      instPromise
        .then((player) => {
          if (typeof player === 'object') {
            player.stop()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }

  const rows = [...Array(rowNumber).keys()].map((index) => (
    <Row
      rowNumber={rowNumber}
      rowIndex={index}
      rowLength={rowLength}
      keyHeight={keyHeight}
      keyWidth={keyWidth}
      deltaX={deltaX}
      deltaY={deltaY}
    />
  ))
  return <div className="flex flex-col w-max">{rows}</div>
}

export default App
