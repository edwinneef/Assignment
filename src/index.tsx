import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigation from "./components/block_navigation";
import Header from "./components/block_header";
import Filter from "./components/block_filter";
import Cases from "./components/block_cases";
import Quote from "./components/block_quote";
import Clients from "./components/block_clients";
import axios from "axios";
import Contact from "./components/block_contact";
import FeaturedCases from "./components/block_featured_case";
import { BADNAME } from "dns";
require("./assets/stylesheets/style.scss");

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cases: null,
      categories: [],
      industries: [],
      filter: {
        category: "all",
        industry: "all"
      },
      menu_items: []
    };

    this.filterCases = this.filterCases.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  makeQuery(queries: { type: string; query: string }[]): string {
    let queryArray: string[] = [];
    queries.forEach(
      q =>
        q.query != "all" &&
        queryArray.push(`${q.type.toLowerCase()}=${q.query.toLowerCase()}`)
    );
    let result: string = queryArray.length ? `?${queryArray.join("&")}` : "";

    return result;
  }

  fetchData = async () => {
    let query: string = this.makeQuery([
      { type: "industry", query: this.state.filter.industry },
      { type: "category", query: this.state.filter.category }
    ]);

    const casesRes = await axios(`http://localhost:3000/cases${query}`);
    const menuRes = await axios("http://localhost:3000/menu_items");

    this.setState(
      {
        ...this.state,
        menu_items: menuRes.data,
        cases: casesRes.data
      },
      () => {
        this.updateFilterProps();
      }
    );
  };

  updateFilterProps() {
    let categories: string[] = [];
    let industries: string[] = [];

    this.state.cases.forEach(c => {
      !categories.includes(c.category) && categories.push(c.category);
      !industries.includes(c.industry) && industries.push(c.industry);
    });

    this.setState({
      ...this.state,
      categories:
        categories.length > this.state.categories.length
          ? categories
          : this.state.categories,
      industries:
        industries.length > this.state.industries.length
          ? industries
          : this.state.industries
    });
  }

  updateIndustries() {
    let industries: string[] = [];
    this.state.cases.forEach(
      c => !industries.includes(c.industry) && industries.push(c.industry)
    );

    if (
      industries.length >
      (this.state.industries && this.state.industries.length)
    ) {
      this.setState({
        ...this.state,
        industries: industries
      });
    }
  }

  filterCases(category?: string, industry?: string) {
    this.setState(
      {
        ...this.state,
        filter: {
          industry: industry ? industry : this.state.filter.industry,
          category: category ? category : this.state.filter.category
        }
      },
      () => this.fetchData()
    );
  }

  doCasesExist(start: number, amount: number): boolean {
    let cases: CaseProps[] = this.state.cases
      ? this.state.cases.slice(start, start + amount)
      : null;
    return cases && cases.length >= amount;
  }

  getCases(
    start: number,
    amount: number,
    featured?: boolean
  ): JSX.Element | null {
    let cases: CaseProps[] = this.state.cases
      ? this.state.cases.slice(start, start + amount)
      : null;
    if (cases && cases.length >= amount) {
      return featured ? (
        <FeaturedCases cases={cases} />
      ) : (
        <Cases cases={cases} />
      );
    }
  }

  render() {
    if (!this.state.cases) {
      this.fetchData();
    }

    return (
      <div className="page-wrapper">
        <Header />
        {this.state.menu_items && this.state.menu_items.length > 1 && (
          <Navigation items={this.state.menu_items} />
        )}
        <Filter
          filterParent={(category: string, industry: string) =>
            this.filterCases(category, industry)
          }
          categories={this.state.categories}
          industries={this.state.industries}
        />
        {this.getCases(0, 4)}
        {this.getCases(4, 3, true)}
        {this.getCases(7, 2)}
        {this.getCases(9, 4)}
        {this.getCases(13, 4)}
        <Quote
          function="CEO"
          company="Company"
          author="Edwin Neef"
          text={`“Dept helped us tell our story through a bold new identity 
        and a robust online experience. To the tune of 60% growth in online 
        bookings in just one month.”`}
        />
        {this.getCases(17, 2)}
        <Clients />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
