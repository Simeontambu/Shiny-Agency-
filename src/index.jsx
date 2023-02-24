import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Survey from './pages/survey'
import Header from './components/header'
import Error from './components/error'
import Results from './pages/results'
import Freelances from './pages/freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
