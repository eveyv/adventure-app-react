import React from 'react'
import { Link } from 'react-router-dom'

const StatesList = ({state}) => {

  let { id, name, abbreviation } = state

  return(
    <div className="cell large-12 medium-12 small-12" key={id}>
      <Link to={`/states/${state.id}`} className="state-names"> {name} </Link>
    </div>
  )
}

export default StatesList
