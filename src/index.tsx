import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Filter from "./components/filter";
import Cases from "./components/cases";
require("./assets/stylesheets/style.scss");

function App() {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <Cases />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
