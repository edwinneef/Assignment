import * as React from "react";
import axios from "axios";

type NavigationProps = {
  items: MenuItem[];
};

type MenuState = {
  show: boolean;
};

function Navigation(props: NavigationProps): JSX.Element {
  const [menu, setMenu] = React.useState<MenuState>({ show: false });

  function toggleMenu(): void {
    setMenu({ ...menu, show: !menu.show });
  }

  return (
    <div className={`topnav ${menu.show ? "topnav--show" : ""}`}>
      <div className="topnav__inner container">
        <div className="topnav__logo" onClick={() => toggleMenu()}>
          <svg className="svg--logo">
            <use xlinkHref="#logo" />
          </svg>
        </div>
        <div className="topnav__toggle" onClick={() => toggleMenu()}>
          <span className="topnav__hamburger topnav__hamburger--first" />
          <span className="topnav__hamburger topnav__hamburger--second" />
        </div>
      </div>
      <nav className="topnav__nav">
        <ul className="topnav__list">
          <div className="topnav__list-inner container">
            {props.items.map(function(item) {
              let itemClassName = item.title.toLocaleLowerCase();
              itemClassName = itemClassName.replace(" ", "-");
              return (
                <li
                  className={`topnav__list-item topnav__list-item--${itemClassName}`}
                  key={item.id}
                >
                  <a
                    href={item.url}
                    className="topnav__list-link"
                    key={item.id}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>

      <div className="topnav__fade" />
    </div>
  );
}
export default Navigation;
