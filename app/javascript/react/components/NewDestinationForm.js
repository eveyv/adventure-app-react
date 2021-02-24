import React, { useState }  from 'react'
import _ from "lodash"
import ErrorList from "./ErrorList"


const NewDestinationForm = props => {


  const [shouldRedirect, setShouldRedirect] = useState(false)
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

  const sendAway = (formPayload) => {
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
    <form className="destination-form" onSubmit={validFormSubmission}>
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
      <label className="form-text">
        * State:
          <select
            id="state"
            name="state"
            value={newDestination.state}
            onChange={handleInputChange}>
              <option></option>
              <option value="Connecticut">Connecticut</option>
              <option value="Maine">Maine</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="Vermont">Vermont</option>
          </select>
        </label>
        <label className="form-text">
        * Activity:
          <select
            id="activities"
            name="activities"
            value={newDestination.activities}
            onChange={handleInputChange}>
              <option></option>
              <option value="Snowmobiling">Snowmobiling</option>
              <option value="Dog-walking">Dog-walking</option>
              <option value="Off-Roading">Off-roading</option>
              <option value="Boating">Boating</option>
              <option value="Hiking">Hiking</option>
              <option value="Running">Running</option>
              <option value="Skiing">Skiing</option>
              <option value="Other">Skiing</option>
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
            Link to website?
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
            onSubmit={sendAway(newDestination)}
          />
        </form>

  )
}

export default NewDestinationForm;
