import { useContext } from "react"
import { useQuery } from '@apollo/client'
import { gql } from '../__generated__/gql'
import Todo from "./Todo"
import './App.sass'
import PaletteGenerator from "./PaletteGenerator"
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom"
import Minesweeper from "./Minesweeper"
import Temp from "./Temp"
import { shuffle } from "underscore"


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

const Layout = () => 
<>
  <header>
    <Link to="/palette">Palette</Link>
    <Link to="/minesweeper">Minesweeper</Link>
    <Link to="/todo">Todo</Link>
  </header>
  <div className="content">
    <Outlet />
  </div>
  <footer></footer>
</>

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Temp fonts={fonts}/>} />
            <Route path="/palette" element={<PaletteGenerator />} />
            <Route path="/minesweeper" element={<Minesweeper />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App