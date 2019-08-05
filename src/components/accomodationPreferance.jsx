import React, { Component } from "react";
import SelectOneCard from "./selectOneCard";
import BackNextButtons from "./backNextButtons";

class AccomodationPreference extends Component {
  render() {
    return (
      <div className="container">
        <h2>Type of accomodation (select atleast one)</h2>
        <SelectOneCard
          data={this.props.accomodationTypeData}
          column="col-md-4"
          onClick={this.props.onClick}
          name="selectedAccomodationType"
          selected={this.props.selectedAccomodationType}
        />
        <hr />
        <h2>Budget per room per night (select atleast one)</h2>
        <SelectOneCard
          data={this.props.roomBudgetData}
          column="col-md-4"
          onClick={this.props.onClick}
          name="selectedRoomBudgetData"
          selected={this.props.selectedRoomBudgetData}
        />
        <br />
        <BackNextButtons
          nextDisabled={
            this.props.selectedAccomodationType.length === 0 ||
            this.props.selectedRoomBudgetData.length === 0
          }
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default AccomodationPreference;
