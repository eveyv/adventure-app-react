import React, { useState, useEffect } from 'react'
import { Redirect} from "react-router-dom"

import NewDestinationForm from './NewDestinationForm'

const NewDestination = props => {

  let destinationId = props.match.params.id



return(
  <div>
    <NewDestinationForm
    />
  </div>
  )
}

export default NewDestination;
