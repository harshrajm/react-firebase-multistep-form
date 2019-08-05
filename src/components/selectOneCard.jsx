import React, { Component } from "react";

class SelectOneCard extends Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map(object => (
          <div
            key={object.id}
            className={this.props.column}
            onClick={() => this.props.onClick(object, this.props.name)}
          >
            <div
              className={
                this.props.selected.indexOf(object) === -1
                  ? "card m-1"
                  : "card m-1 border-primary bg-light"
              }
            >
              {object.img && <img className="card-img-top" src={object.img} />}
              <div className="card-body">{object.option}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SelectOneCard;
