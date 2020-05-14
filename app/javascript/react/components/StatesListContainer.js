import React, { useState, useEffect } from 'react'
import StatesList from './StatesList'

const StatesListContainer = props => {

const [ states, setStates ] = useState([])

useEffect(() => {
    fetch('/api/v1/states.json')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      setStates(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const stateList = states.map(state => {
    return(
      <StatesList
        key={state.id}
        state={state}
      />
    )
  })
  return(
    <div>
      {stateList}
    </div>
  )
}


export default StatesListContainer
