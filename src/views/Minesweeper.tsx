import { useState } from "react"
import Field from "../components/minesweeper/Field"

const Minesweeper = () => {
  const [width, setWidth] = useState(25)
  const [height, setHeight] = useState(40)
  const [mines, setMines] = useState(40)

  return (
    <Field width={width} height={height} mines={mines} />
  )
}

export default Minesweeper