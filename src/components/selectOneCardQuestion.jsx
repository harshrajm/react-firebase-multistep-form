import React, { Component } from "react";
import SelectOneCard from "./selectOneCard";
import BackNextButtons from "./backNextButtons";
class SelectOneCardQuestion extends Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.question}</h2>
        <SelectOneCard
          data={this.props.data}
          column={this.props.cardWidth}
          onClick={this.props.onClick}
          name={this.props.name}
          selected={this.props.selected}
        />
        <br />
        <BackNextButtons
          nextDisabled={this.props.selected.length === 0}
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default SelectOneCardQuestion;
