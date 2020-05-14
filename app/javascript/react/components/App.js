import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../../../assets/stylesheets/welcome.scss'
import Welcome from './Welcome'


export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
