import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Filter from "./components/filter";
import Cases from "./components/cases";
import QuoteComponent from "./components/quote";
import ClientsComponent from "./components/clients";
import ContactComponent from "./components/contact";
require("./assets/stylesheets/style.scss");

function App() {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <Cases />
      <QuoteComponent
        function="CEO"
        company="Company"
        author="Edwin Neef"
        text={`“Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”`}
      />
      <ClientsComponent />
      <ContactComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
