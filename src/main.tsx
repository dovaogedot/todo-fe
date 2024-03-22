import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.tsx'
import Temp from './views/Temp.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Temp />
  </React.StrictMode>,
)
