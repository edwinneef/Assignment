import React, { useState } from "react";
import ReactDOM from "react-dom";

const Filter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="case-filter">
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
};

export default Filter;
