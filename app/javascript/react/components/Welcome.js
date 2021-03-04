import React from 'react'
import { Container } from 'bulma'
import { Link } from 'react-router-dom'
import '../../../assets/stylesheets/welcome.scss'
import '../../../assets/stylesheets/bg-img.scss'


const Welcome = (props) => {

  return(
      <div className="bg-img container">
        <h1 className="balance-home-header">Welcome!</h1>
        <Link to={`/destinations/new`} className="link"> Add a Location</Link>
        <br />
        <Link to={`/states`} className="link"> Find Your State</Link>
    </div>
  )
}

export default Welcome;
