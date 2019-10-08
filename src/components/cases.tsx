import * as React from "react";
import Filter from "./filter";
import axios from "axios";

interface CaseProps {
  id: number;
  name: string;
  title: string;
  image_url: string;
  industry?: string;
  platforms?: string[];
  type: undefined | "default" | "featured" | "side";
}

function Case(props: CaseProps): JSX.Element {
  return (
    <article
      className={`case-column case-column--${
        props.type == "default"
          ? "half"
          : props.type == "featured"
          ? "featured"
          : props.type == "side"
          ? "side"
          : ""
      }`}
      key={props.id}
    >
      <a href="#" className="case__link-outer">
        <div className="case-column__inner">
          {props.type != "side" && (
            <div className="case__visual">
              <img
                src={`https://picsum.photos/id/${
                  props.image_url ? props.image_url : "1"
                }/1000/600`}
                alt=""
                className="case__image"
              />
            </div>
          )}

          <div className="case__content">
            <span className="case__client-name title--s">{props.name}</span>
            <h3 className="case__title">{props.title}</h3>
            <a href="#" className="case__link">
              View case
            </a>
          </div>
        </div>
      </a>
    </article>
  );
}

function CasesGrid(props: { cases: CaseProps[] }): JSX.Element {
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
              image_url={`${Math.floor(Math.random() * 500).toString()}`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function FeaturedCaseRow(props: {
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
        />
        <aside className="cases__sidebar">
          {sideCases.map(c => (
            <React.Fragment key={c.id}>
              <Case title={c.title} name={c.name} id={c.id} type="side" />
            </React.Fragment>
          ))}
        </aside>
      </div>
    </div>
  );
}

interface AxiosCases {
  cases: CaseProps[];
}

function Cases(): JSX.Element {
  const [cases, setCases] = React.useState<AxiosCases | null>(undefined);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/cases");
      setCases({ cases: result.data });
    };
    fetchData();
  }, []);

  let caseList: CaseProps[] = [];
  caseList = cases ? cases.cases : caseList;

  function getCases(amount: number) {
    return caseList.length >= amount ? caseList.splice(0, amount) : null;
  }

  function checkCases(amount: number) {
    return caseList.length >= amount;
  }

  return cases ? (
    <div className="cases-overview">
      <Filter />
      {cases && (
        <>
          {checkCases(4) && <CasesGrid cases={getCases(4)} />}
          {checkCases(3) && <FeaturedCaseRow cases={getCases(3)} />}
          {checkCases(2) && <CasesGrid cases={getCases(2)} />}
          {checkCases(3) && <FeaturedCaseRow cases={getCases(3)} reversed />}
          {checkCases(4) && <CasesGrid cases={getCases(4)} />}
        </>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Cases;
