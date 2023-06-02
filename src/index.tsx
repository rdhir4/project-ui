import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import light from './Themes/light'
import GlobalStyle from './globalStyles'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
