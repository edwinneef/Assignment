import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Cases from "./components/cases";
import Filter from "./components/filter";
import style from "./assets/stylesheets/style";

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
