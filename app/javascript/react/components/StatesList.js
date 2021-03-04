import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import StateObject from './StateObject'

const StatesList = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [stats, setStats] = useState([])
  let [error, setError ] = useState([])
  useEffect(() => {
    fetch('/api/v1/states.json')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(stateData => {
      setStats(stateData)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const stateList = stats.map(state => {
    return(
      <StateObject 
        key={state.id}
        state={state}
        name={state.name}
        abbreviation={state.abbreviation}
      />
    )
  })

  return(
    <div>
      { stateList }
    </div>
  )
}

export default StatesList
