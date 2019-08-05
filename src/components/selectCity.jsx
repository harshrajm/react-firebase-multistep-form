import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import BackNextButtons from "./backNextButtons";
import MaterialIcon from "material-icons-react";
import "../index.css";

class SelectCity extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3 className="text-left">{this.props.countryName}</h3>
        <Typeahead
          id="citySelector"
          bsSize="large"
          labelKey="name"
          multiple
          options={this.props.data}
          onChange={this.props.handleChange("selectedCityArr")}
          minLength={0}
          placeholder="Select Cities"
          selected={this.props.selected}
          allowNew
          style={{ height: "auto" }}
          className="text-left"
        />
        <br />
        <div className="row">
          {this.props.data
            .sort((city1, city2) => {
              return city2.isTrending - city1.isTrending;
            })
            // .filter(city => {
            //   console.log(city);

            //   return this.props.selected.indexOf(city) === -1 ? true : false;
            // })
            .map(city => (
              <div key={city.name} className="col-sm-4 ">
                <div
                  className={
                    this.props.selected.indexOf(city) === -1
                      ? "card  m-1 "
                      : "card  m-1 border-primary bg-light"
                  }
                  onClick={
                    this.props.selected.indexOf(city) === -1
                      ? () => this.props.cityCardClicked(city)
                      : undefined
                  }
                >
                  <div className="card-body">
                    {city.isTrending && (
                      <span className="float-left ">
                        <MaterialIcon icon="trending_up" />
                      </span>
                    )}

                    {city.name}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            value=""
            checked={this.props.recommendCities}
            onChange={this.props.recommendCitiesClicked}
          />
          &nbsp; Recommend Cities
        </label>
        <br />
        <BackNextButtons
          nextDisabled={
            this.props.selected.length === 0 && !this.props.recommendCities
          }
          nextOnClick={this.props.nextClicked}
          prevOnClick={this.props.prevClicked}
        />
      </div>
    );
  }
}

export default SelectCity;
