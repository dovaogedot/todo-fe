import React from 'react'
import ReactDOM from 'react-dom/client'
import Temp from './views/Temp.tsx'
import { shuffle } from 'underscore'

const fonts = shuffle([
  'Amatic SC',
  'Kablammo',
  'Montserrat Alternates',
  'Pangolin',
  'Poiret One',
  'Rubik Burned',
  'Rubik Doodle Triangles',
  'Rubik Gemstones',
  'Rubik Glitch',
  'Rubik Glitch Pop',
  'Rubik Iso',
  'Rubik Lines',
  'Rubik Maps',
  'Rubik Marker Hatch',
  'Rubik Scribble',
  'Rubik Wet Paint',
  'Rubik 80s Fade',
  'Unbounded',
  'Yeseva One',
]).map(f => {
  const r = Math.random() * 360
  return {
    name: f,
    hue0: `hsl(${r}, 100%, 94%)`,
    hue1: `hsl(${(r + 180 + 30) % 360}deg, 100%, 50%)`,
    hue2: `hsl(${(r + 180 - 30) % 360}deg, 100%, 50%)`,
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Temp fonts={fonts}/>
  </React.StrictMode>,
)
