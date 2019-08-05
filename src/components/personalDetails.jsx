import React, { Component } from "react";
import BackNextButtons from "./backNextButtons";

class PersonalDetails extends Component {
  render() {
    return (
      <div className="container">
        <h2>Personal Details</h2>
        <div className="row">
          <div className="offset-4 col-4">
            <div className="form-group">
              <label for="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter full name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="confirmEmail">Confirm Email</label>
              <input
                type="email"
                className="form-control"
                id="confirmEmail"
                placeholder="Re-enter email"
              />
            </div>
            <div className="form-group">
              <label for="mobile">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder="Mobile(optional)"
              />
            </div>
          </div>
        </div>

        <br />
        <BackNextButtons
          nextDisabled={true}
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default PersonalDetails;
