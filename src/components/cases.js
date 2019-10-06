import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import Filter from "./filter";

export const Context = createContext({});

export const Case = t => {
  return (
    <div className="case-column case-column--half">
      <div className="case-column__inner">
        <div className="case__visual">
          <img
            src="http://placehold.it/585x500"
            alt=""
            className="case__image"
          />
        </div>
      </div>
    </div>
  );
};

const CaseRow = cases => {
  return (
    <div className="cases">
      <div className="cases__inner container--np">
        <Case t="Bazgina" />
        <Case t="Bazgina" />
      </div>
    </div>
  );
};

const Cases = ({ data }) => {
  return (
    <div className="cases-overview">
      <Filter />
      <CaseRow />
      <CaseRow />
    </div>
  );
};

export default Cases;
