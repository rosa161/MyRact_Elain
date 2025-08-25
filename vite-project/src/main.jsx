import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import './assets.all.scss'
import App from'./pages/App0825-localstorage'
import { HashRouter } from 'react-router-dom'
// import App from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </StrictMode>,
)
