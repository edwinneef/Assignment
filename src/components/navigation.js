import React, { useEffect, useState } from "react";
import "babel-polyfill";
import axios from "axios";
import { baseUrl } from "../helpers";
import ReactDOM from "react-dom";

const Navigation = () => {
  const useFetch = url => {
    const [data, setData] = useState(null);
    useEffect(() => {
      (async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      })();
    }, [url]);
    return data;
  };

  console.log(useFetch("http://localhost:3000/menu_items"));

  return (
    <nav>
      <ul></ul>
    </nav>
  );
};

export default Navigation;
