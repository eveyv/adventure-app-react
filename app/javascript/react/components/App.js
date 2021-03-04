import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../../../assets/stylesheets/welcome.scss'
import Welcome from './Welcome'
import NewDestinationForm from './NewDestinationForm'
import DestinationShow from './DestinationShow'
import DestinationShowContainer from './DestinationShowContainer'
import StatesList from './StatesList'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/destinations/new" component={NewDestinationForm} />
          <Route exact path="/destinations/:id" component={DestinationShowContainer} />
          <Route exact path="/states" component={StatesList} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
