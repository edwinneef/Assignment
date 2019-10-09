import * as React from "react";
import Filter from "./block_filter";
import axios from "axios";
import Case from "./case";

interface CaseProps {
  id: number;
  name: string;
  title: string;
  image_url: string;
  industry?: string;
  platforms?: string[];
  type: undefined | "default" | "featured" | "side";
}

function Cases(props: { cases: CaseProps[] }): JSX.Element {
  return (
    <div className="cases cases--grid">
      <div className="cases__inner container--np">
        {props.cases.map(c => (
          <React.Fragment key={c.id}>
            <Case
              title={c.title}
              name={c.name}
              id={c.id}
              type="default"
              image_url={`${Math.floor(Math.random() * 100).toString()}`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Cases;
