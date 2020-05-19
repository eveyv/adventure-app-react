import React, { useState, useEffect } from 'react'
import { Redirect} from "react-router-dom"

import NewDestinationForm from './NewDestinationForm'

const NewDestination = props => {

  let destinationId = props.match.params.id
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const setNewDestination = (formPayload) => {
    fetch('/api/v1/destinations.json', {
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  if(shouldRedirect) {
    return <Redirect to="/" />
  }

return(
  <div>
    <NewDestinationForm
      onSubmit={setNewDestination}
    />
  </div>
  )
}

export default NewDestination;
