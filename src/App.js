import React, { Component } from "react";
import "./App.css";
import MultiStepForm from "./components/multiStepForm";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <MultiStepForm />
      </div>
    );
  }
}

export default App;
