import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import DestinationShow from './DestinationShow'

const DestinationShowContainer = (props) => {
  const [destination, setDestination] = useState({})

  let destinationId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/trips/${destinationId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw error
      }
    })
    .then(fetchedDestination => {
      return fetchedDestination.json()
    })
    .then(destinationData => {
      setDestination(destinationData)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div>
      <DestinationShowContainer
      destinationObject={destination}
      />
    </div>
  )
}

export default DestinationShowContainer;
