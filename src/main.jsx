import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SomaliQuotes from './components/somaliQuotes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <Header/>
  <SomaliQuotes/>
  <Footer/>
  </div>
)
