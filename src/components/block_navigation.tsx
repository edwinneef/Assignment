import * as React from "react";
import axios from "axios";

type navigationProps = {
  items: MenuItem[];
};

function Navigation(props: navigationProps): JSX.Element {
  return (
    <nav className="topnav">
      <ul className="topnav__list">
        {props.items.map(function(item) {
          const itemClassName = item.title;
          return (
            <li className="topnav__list-item" key={item.id}>
              <a href={item.url} className="topnav__list-link" key={item.id}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navigation;
