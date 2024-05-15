import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./Layout"
import Temp from "./Temp"
import PaletteGenerator from "./PaletteGenerator"
import Minesweeper from "./Minesweeper"
import Todo from "./Todo"
import Form from "./Form"
import Eurovision from "./Eurovision"

import "/src/css/App.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Temp />} />
          <Route path="/palette" element={<PaletteGenerator />} />
          <Route path="/minesweeper" element={<Minesweeper />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/eurovision" element={<Eurovision />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App