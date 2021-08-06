import React, { useEffect } from 'react'
import SoundFont from 'soundfont-player'
import Row from './components/Row'

const rowNumber = 7
const rowLength = 10
const keyHeight = 20
const keyWidth = 40
const deltaX = 2
const deltaY = 3

interface Playing {
  note: number
  value: Promise<void | SoundFont.Player>
}

const App = (): JSX.Element => {
  useEffect(() => {
    const playing: Playing[] = [{}]
    const ac = new AudioContext()
    const instrument = SoundFont.instrument(ac, 'acoustic_grand_piano')

    const playSound = {
      noteOn: (keyNumber: number) =>
        instrument
          .then((inst) =>
            inst.play(`${keyNumber}`, ac.currentTime, { gain: 20 })
          )
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

    document.addEventListener('noteOn', (e) => {
      const { note } = e.detail
      playing.push({ note, value: playSound.noteOn(note) })
    })
    document.addEventListener('noteOff', (e) => {
      const { note } = e.detail
      const index = playing.findIndex((el) => el.note === note)
      playing[index]?.value.then((inst) => inst?.stop())
      playing.splice(index, 1)
    })
  }, [])

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
  return (
    <div className="flex flex-col w-max" id="app">
      {rows}
    </div>
  )
}

export default App
