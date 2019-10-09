import * as React from "react";
import Filter from "./block_filter";
import axios from "axios";
import Case from "./case";

function Cases(props: { cases: CaseProps[] }): JSX.Element {
  return (
    <div className="cases cases--grid">
      <div className="cases__inner container--np">
        {props.cases &&
          props.cases.map(c => (
            <React.Fragment key={c.id}>
              <Case title={c.title} name={c.name} id={c.id} type="default" />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default Cases;
