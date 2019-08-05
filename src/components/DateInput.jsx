import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BackNextButtons from "./backNextButtons";

class DateInput extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span>From : </span>
            <DatePicker
              minDate={new Date()}
              selected={this.props.fromDate}
              selectsStart
              startDate={this.props.fromDate}
              endDate={this.props.toDate}
              onChange={this.props.handleChange("fromDate")}
              placeholderText="Pick Start Date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="col-md-4">
            <span>To : </span>
            <DatePicker
              minDate={this.props.fromDate}
              selected={this.props.toDate}
              selectsEnd
              startDate={this.props.fromDate}
              endDate={this.props.toDate}
              onChange={this.props.handleChange("toDate")}
              placeholderText="Pick End Date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          {this.props.toDate && this.props.fromDate && (
            <div className="col-md-4">
              Number Of days :{" "}
              {parseInt(
                (this.props.toDate - this.props.fromDate) /
                  (1000 * 60 * 60 * 24)
              ) + 1}
            </div>
          )}
        </div>
        <br />
        <BackNextButtons
          nextDisabled={!(this.props.fromDate && this.props.toDate)}
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default DateInput;
