import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <App/>

      <Route exact path="/" component={App} />
      <Route exact path="/feed" component={App} />
      <Route exact path="/account" component={App} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
