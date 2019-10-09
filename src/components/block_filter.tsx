import * as React from "react";

type FilterProps = {
  onClick: (category: string, industry: string) => void;
};

function Filter(props: FilterProps): JSX.Element {
  return (
    <div className="case-filter" onClick={() => props.onClick("", "personal")}>
      <div className="case-filter__inner container">
        <span className="case-filter__description">Show me</span>
        <ul className="case-filter__dropdown">
          <li className="case-filter__dropdown-item">All work</li>
        </ul>
        <span className="case-filter__description">in</span>
        <ul className="case-filter__dropdown">
          <li className="case-filter__dropdown-item">All industries</li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
