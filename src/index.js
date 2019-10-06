import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Cases from "./components/cases";
import Filter from "./components/filter";
import style from "./assets/stylesheets/style";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kind: "loaded"
    };
  }

  render() {
    return this.state.kind == "loaded" ? (
      <div>
        <Header />
        <Navigation />
        <Filter />
      </div>
    ) : (
      <div>Loading app...</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
