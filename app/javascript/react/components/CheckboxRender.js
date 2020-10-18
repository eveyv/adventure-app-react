import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = [ "Hiking", "Boating/Kayaking", "Camping", "Dog Park", "Jogging", "Skiing/Snowboarding", "Snowmobiling", "Rock-climbing", "Off-roading/ATV" ]

class CheckboxRender extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };


  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
      onSubmit={this.handleFormSubmit}
      id={option}
      value={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
              {this.createCheckboxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxRender;
