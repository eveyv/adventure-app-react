import React from 'react'

const DestinationShow = ({ destinationObject }) => {
  let { id, name, activities, state, address, cost, price, website } = destinationObject

  return(
    <div>
      <h2> {name}, {activities} </h2>
    </div>
  )
}

export default DestinationShow;
