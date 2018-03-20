import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App/App'
import registerServiceWorker from './registerServiceWorker'

/**
 * Renders router + App
 */
ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
