import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import BackNextButtons from "./backNextButtons";

class BudgetSlider extends Component {
  render() {
    return (
      <div className="container">
        <h4>Enter Number of people travelling </h4>
        <input
          className="form-control col-2 offset-5"
          type="number"
          value={this.props.numOfTravellers}
          onChange={this.props.handleChange("numOfTravellers")}
          min="1"
        />
        <hr />
        <h4>
          Budget range per person for the trip(excluding food, drinks and
          shopping)
        </h4>
        <br />
        <div className={this.props.budgetSuggestion ? "hidden" : ""}>
          <InputRange
            maxValue={500000}
            minValue={5000}
            value={this.props.value}
            onChange={value => this.props.handleSlider({ value })}
            formatLabel={value => `Rs ${value}`}
            step={5000}
          />
        </div>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            value=""
            checked={this.props.budgetSuggestion}
            onChange={this.props.handleChange("budgetSuggestion")}
          />
          &nbsp; I am not sure. I would like your suggestions.
        </label>
        <br />
        <BackNextButtons
          nextDisabled={!this.props.numOfTravellers}
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default BudgetSlider;
