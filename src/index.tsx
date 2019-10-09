import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "./components/block_navigation";
import Header from "./components/block_header";
import Filter from "./components/block_filter";
import Cases from "./components/block_cases";
import Quote from "./components/block_quote";
import Clients from "./components/block_clients";
import axios from "axios";
import Contact from "./components/block_contact";
import FeaturedCases from "./components/block_featured_case";
require("./assets/stylesheets/style.scss");

function App(): JSX.Element {
  const [appState, setAppState] = React.useState<AppState | null>(undefined);

  React.useEffect(() => {
    const fetchData = async () => {
      const casesRes = await axios("http://localhost:3000/cases");
      const menuRes = await axios("http://localhost:3000/menu_items");

      setAppState({ menu_items: menuRes.data, cases: casesRes.data });
    };

    fetchData();
  }, []);

  let casesList: CaseProps[];
  casesList = appState ? appState.cases : casesList;

  return (
    <div>
      <Header />
      {appState && appState.menu_items.length > 1 && (
        <Navigation items={appState.menu_items} />
      )}
      <Filter />

      {casesList ? (
        <>
          <Cases cases={casesList.length > 4 ? casesList.splice(0, 4) : []} />
          <FeaturedCases
            cases={casesList.length > 3 ? casesList.splice(0, 3) : []}
          />
          <Cases cases={casesList.length > 4 ? casesList.splice(0, 4) : []} />
        </>
      ) : (
        <div className="container">Loading cases...</div>
      )}
      <Quote
        function="CEO"
        company="Company"
        author="Edwin Neef"
        text={`“Dept helped us tell our story through a bold new identity 
        and a robust online experience. To the tune of 60% growth in online 
        bookings in just one month.”`}
      />
      <Clients />
      <Contact />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
