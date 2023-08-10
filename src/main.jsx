import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import MyRouter from './routes/routes.jsx'
import GlobalStyle from './styles/GlobalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
