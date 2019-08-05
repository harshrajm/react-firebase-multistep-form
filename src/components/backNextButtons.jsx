import React, { Component } from "react";

class BackNextButtons extends Component {
  render() {
    const {
      hideNext,
      hidePrev,
      nextDisabled,
      nextOnClick,
      prevOnClick
    } = this.props;

    let nextClass = "btn btn-primary btn-block";
    let prevClass = "btn btn-light btn-block";

    if (hideNext) {
      nextClass += " invisible";
    }
    if (hidePrev) {
      prevClass += " invisible";
    }

    return (
      <div className="row ">
        <div className="col-sm-6">
          <button type="button" className={prevClass} onClick={prevOnClick}>
            Back
          </button>
        </div>
        <div className="col-sm-6 ">
          <button
            type="button"
            className={nextClass}
            disabled={nextDisabled}
            onClick={nextOnClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default BackNextButtons;
