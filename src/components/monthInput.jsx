import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import BackNextButtons from "./backNextButtons";

class MonthInput extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h4 className="col-4">Choose Travel Month</h4>
          <div className="col-4 ">
            <Dropdown
              options={this.props.monthOptions}
              onChange={this.props.handleChange("selectedMonth")}
              placeholder="Select Month"
              value={this.props.selectedMonth}
            />
          </div>
          <div className="col-4 ">
            <Dropdown
              options={this.props.yearOptions}
              onChange={this.props.handleChange("selectedYear")}
              placeholder="Select Year"
              value={this.props.selectedYear}
            />
          </div>
        </div>
        <br />
        <BackNextButtons
          nextDisabled={!this.props.selectedYear || !this.props.selectedMonth}
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default MonthInput;
