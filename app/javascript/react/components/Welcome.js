import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/stylesheets/welcome.scss'

const Welcome = (props) => {

  return(
    <div>
      <h1 className="balance-home-header">Welcome!</h1>
      <Link to={`/destinations/new`} className="link"> Add a Location</Link>
    </div>
  )
}

export default Welcome;
