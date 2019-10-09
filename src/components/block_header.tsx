import * as React from "react";

function Header(): JSX.Element {
  return (
    <div className="header--main">
      <div className="header--main__inner container">
        <h1 className="header--main__title">Work</h1>
      </div>
      <div className="header--main__visual">
        <img
          className="header--main__image"
          src="https://picsum.photos/id/4/1920/1080"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
