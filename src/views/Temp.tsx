import './Temp.sass'
import { useEffect, useRef, useState } from 'react'
import { shuffle } from 'underscore'


interface Props {
  fonts: {
    name: string,
    hue0: string,
    hue1: string,
    hue2: string,
  }[]
}

const Temp = ({ fonts }: Props) => {
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
    <>
      <div className="container" onClick={handleClick} onContextMenu={handleContextMenu}>
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
      <div className='font-preloader' ref={preloader}>
        {fonts.map((f, i) => <span key={i} style={{ fontFamily: `'${f.name}'` }}> </span>)}
      </div>
    </>
  )
}

export default Temp