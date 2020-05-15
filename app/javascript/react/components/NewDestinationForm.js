import React, { useState }  from 'react'
import _ from "lodash"
import ErrorList from "./ErrorList"
import CheckboxRender from './CheckboxRender'


const DestinationForm = props => {
  const [ errors, setErrors ] = useState({})
  const [ newDestination, setNewDestination ] = useState({
    name: "",
    activities: "",
    state: "",
    address: "",
    cost: "",
    price: "",
    website: "",
  })


  const handleInputChange = event => {
    setNewDestination({
      ...newDestination,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validFormSubmission = () => {
    let submitErrors = {}
    const requiredFields = [ "name", "activities", "state", "address", "cost" ]
      requiredFields.forEach(field => {
        if(newDestination[field].trim() === "") {
          submitErrors = {
          ...submitErrors,
          [field]: "cannot be blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      let formPayload = newDestination;
      if (validFormSubmission()) {
        props.onSubmit(formPayload)
        setNewDestination({
          name: "",
          activities: "",
          state: "",
          address: "",
          cost: "",
          price: "",
          website: "",
        })
      }
    }

  return(
    <form className="destination-form" onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
          <label className="form-text">
            * Location Name:
            <input
            id="name"
            type="text"
            name="name"
            value={newDestination.name}
            onChange={handleInputChange}
            />
          </label>
          <CheckboxRender
          />
          <label className="form-text">
            * State:
              <select
                id="state"
                name="state"
                value={newDestination.state}
                onChange={handleInputChange}>
                  <option disabled selected value> -- select a state -- </option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Maine">Maine</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="Vermont">Vermont</option>
              </select>
            </label>
            <label className="form-text">
              * Access Point (Street Address):
              <input
                id="address"
                type="text"
                name="address"
                value={newDestination.address}
                onChange={handleInputChange}
              />
            </label>
              <label className="form-text">
                Is there a fee?
                <input
                  id="cost"
                  type="text"
                  name="cost"
                  value={newDestination.cost}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-text">
                If there is a charge, how much is it?
                <input
                  id="price"
                  type="text"
                  name="price"
                  value={newDestination.price}
                  onChange={handleInputChange}
                />
              </label>
              <label className="form-text">
                Is there a website?
                <input
                  id="website"
                  type="text"
                  name="website"
                  value={newDestination.website}
                  onChange={handleInputChange}>
                </input>
              </label>
              <input
              type="submit"
              className="btn"
              />
        </form>

  )
}

export default DestinationForm;
