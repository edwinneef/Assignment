import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";

export const Context = createContext({});

const Cases = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <nav onClick={() => setCount(count + 1)}>
      {count}
      <ul>
        {data.cases.map(item => (
          <li key={item.id}>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Cases;
