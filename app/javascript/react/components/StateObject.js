import React from 'react'
import { Link } from 'react-router-dom'

const StateObject = ({ state }) => {
  let { id, name, abbreviation } = state

  return(
    <div key={id} className="state-list">
      <Link to={`/states/${state.id}`} className="link-to"> {state.name} </Link>
    </div>
  )
}

export default StateObject