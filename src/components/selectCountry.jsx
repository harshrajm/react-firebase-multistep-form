import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import BackNextButtons from "./backNextButtons";
import "../styles.css";
import { css } from "@emotion/core";
// First way to import
import { RiseLoader } from "react-spinners";
// Another way to import
//import ClipLoader from "react-spinners/ClipLoader";
import MaterialIcon from "material-icons-react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class SelectCountry extends Component {
  render() {
    return (
      <div className="container">
        <Typeahead
          id="countrySelector"
          bsSize="large"
          labelKey="name"
          multiple={false}
          options={this.props.data}
          onChange={this.props.handleChange("country")}
          minLength={0}
          placeholder="Select Country"
          selected={this.props.selected}
        />
        <br />
        <h3 className="text-left">
          Trending Destinations
          <MaterialIcon icon="trending_up" />
        </h3>
        <RiseLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={"#cfd8dc"}
          loading={this.props.data.length === 0}
        />
        <ul className="list-group list-group-flush text-left">
          {this.props.data
            .filter(country => {
              return country.isTrending;
            })
            .map(country => (
              <li
                key={country.name}
                className={
                  this.props.selected.length === 1 &&
                  this.props.selected[0].name === country.name
                    ? "list-group-item selected"
                    : "list-group-item "
                }
                onClick={() => this.props.trendingCountryClicked(country)}
                style={this.style}
              >
                {country.name}
              </li>
            ))}
        </ul>
        <br />
        <BackNextButtons
          nextDisabled={this.props.selected.length === 0}
          nextOnClick={this.props.nextClicked}
          hidePrev
        />
      </div>
    );
  }
}

export default SelectCountry;
