import React, { Component } from "react";
import BackNextButtons from "./backNextButtons";

class AnythingElse extends Component {
  render() {
    return (
      <div className="container">
        <h2>Anything else we should know?</h2>
        <div>
          <p className="text-left">
            Do you have any specific things that you would definitely like to be
            included in the itinerary?
          </p>
          <p className="text-left">Any existing plans?</p>
          <p className="text-left">Any place you want to visit?</p>
          <p className="text-left">Any food you definitely want to try?</p>
          <p className="text-left">Any activity you want to do?</p>
          <p className="text-left">Any item you want to purchase?</p>
        </div>
        <textarea
          class="form-control"
          rows="3"
          onChange={this.props.handleChange("anythingElse")}
        />
        <br />
        <BackNextButtons
          nextDisabled={false}
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default AnythingElse;
