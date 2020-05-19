import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../../../assets/stylesheets/welcome.scss'
import Welcome from './Welcome'
import NewDestinationForm from './NewDestinationForm'
import StatesListContainer from './StatesListContainer'
import DestinationShow from './DestinationShow'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/destinations/new" component={NewDestinationForm} />
          <Route exact path="/states" component={StatesListContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
