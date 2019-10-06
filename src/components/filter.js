import React, { useState } from "react";
import ReactDOM from "react-dom";

const Filter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="case-filter">
      <div className="container">Filter {count}.</div>
    </div>
  );
};

export default Filter;
