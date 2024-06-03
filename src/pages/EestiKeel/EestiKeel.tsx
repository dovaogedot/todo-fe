import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Admin from "./views/Admin"
import Exercise from "./views/Exercise"


export default function EestiKeel() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Exercise />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  )
}