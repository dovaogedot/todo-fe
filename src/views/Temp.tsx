import './Temp.sass'
import { useEffect, useRef, useState } from 'react'
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

const Temp = () => {
  const background = useRef<HTMLDivElement>(null)
  const preloader = useRef<HTMLDivElement>(null)
  const [selectedFont, setSelectedFont] = useState(0)

  const changeFont = async (increment: number) => {
    let newFont = (selectedFont + increment) % fonts.length
    if (newFont < 0) newFont += fonts.length
    setSelectedFont(newFont)
  }

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    changeFont(e.button == 0 ? 1 : -1)
  }

  const handleContextMenu = async (e: React.MouseEvent) => {
    e.preventDefault()
    changeFont(e.button == 0 ? 1 : -1)
  }

  return (
    <div className='temp-container flex-center full'>
      <div className="temp-button" onClick={handleClick} onContextMenu={handleContextMenu}>
        <div className="text" style={{
          fontFamily: fonts[selectedFont].name,
          color: fonts[selectedFont].hue0,
        }}>
          Still in development
        </div>
        <div className='border'>
          <div className="background" ref={background} style={{
            ['--hue1' as keyof StylePropertyMap]: fonts[selectedFont].hue1,
            ['--hue2' as keyof StylePropertyMap]: fonts[selectedFont].hue2,
          }}></div>
        </div>
      </div>
      <div className='temp-font-preloader' ref={preloader}>
        {fonts.map((f, i) => <span key={i} style={{ fontFamily: `'${f.name}'` }}> </span>)}
      </div>
    </div>
  )
}

export default Temp