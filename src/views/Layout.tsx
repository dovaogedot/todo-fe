import { Link, Outlet } from "react-router-dom"
import './Layout.scss'

const Layout = () =>
  <>
    <nav className="flex-row fs-4">
      <Link to="/palette">Palette</Link>
      <Link to="/minesweeper">Minesweeper</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/form">Form</Link>
      <Link to="/eurovision">Eurovision</Link>
    </nav>
    <div className="flex-column flex-grow">
      <Outlet />
    </div>
  </>

export default Layout