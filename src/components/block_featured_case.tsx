import * as React from "react";
import Case from "./case";

function FeaturedCases(props: {
  cases: CaseProps[];
  reversed?: boolean;
}): JSX.Element {
  let allCases = props.cases;
  const featuredCase = allCases[0];
  allCases.shift();
  const sideCases = allCases;

  return (
    <div
      className={`cases cases--featured${
        props.reversed ? " cases--reversed" : ""
      }`}
    >
      <div className="cases__inner container--np">
        <Case
          title={featuredCase.title}
          name={featuredCase.name}
          id={featuredCase.id}
          type="featured"
          image_url="1"
        />
        <aside className="cases__sidebar">
          {sideCases.map(c => (
            <React.Fragment key={c.id}>
              <Case
                title={c.title}
                name={c.name}
                id={c.id}
                type="side"
                image_url="1"
              />
            </React.Fragment>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default FeaturedCases;
