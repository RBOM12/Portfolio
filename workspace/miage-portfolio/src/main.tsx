import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { ColorModeProvider } from './theme/ColorModeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ColorModeProvider>
  </StrictMode>,
)
