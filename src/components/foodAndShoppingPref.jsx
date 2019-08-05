import React, { Component } from "react";
import SelectOneCard from "./selectOneCard";
import BackNextButtons from "./backNextButtons";
class FoodAndShoppingPref extends Component {
  ///state = {  }
  render() {
    return (
      <div className="container">
        <h2>Food Cost</h2>
        <SelectOneCard
          data={this.props.foodCostData}
          column="col-4"
          onClick={this.props.onFoodCostClick}
          name="selectedFoodCostArr"
          selected={this.props.selectedFoodCostArr}
        />
        <hr />
        <h2>Dining Environments</h2>
        <SelectOneCard
          data={this.props.diningEnvData}
          column="col-3"
          onClick={this.props.onDiningEnvClicked}
          name="selectedDiningEnvArr"
          selected={this.props.selectedDiningEnvArr}
        />
        <hr />
        <h2>Shopping Preferences</h2>
        <SelectOneCard
          data={this.props.shoppingPrefData}
          column="col-3"
          onClick={this.props.onShoppingPrefClicked}
          name="selectedShoppingPrefArr"
          selected={this.props.selectedShoppingPrefArr}
        />
        <br />
        <BackNextButtons
          nextDisabled={
            this.props.selectedFoodCostArr.length === 0 ||
            this.props.selectedDiningEnvArr.length === 0 ||
            this.props.selectedShoppingPrefArr.length === 0
          }
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default FoodAndShoppingPref;
