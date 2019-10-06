import React, { useState, useEffect } from "react";
import axios from "axios";

function Navigation() {
  const [data, setData] = useState({ menu_items: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/menu_items");
      setData({ menu_items: result.data });
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <ul>
      {data.menu_items.map(function(item) {
        return (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
export default Navigation;
