import * as React from "react";

type FilterProps = {
  filterParent: (category: string, industry: string) => void;
  categories: string[];
  industries: string[];
};

type FilterHook = {
  currentCategory: string;
  currentIndustry: string;
};

function Filter(props: FilterProps): JSX.Element {
  const [filter, setFilter] = React.useState<FilterHook>({
    currentCategory: "All categories",
    currentIndustry: "All industries"
  });

  return (
    <div className="case-filter">
      <div className="case-filter__inner container">
        <span className="case-filter__description">Show me</span>
        {props.categories && (
          <ul className="case-filter__menu case-filter__menu--category">
            <li className="case-filter__menu-item">
              <span className="case-filter__all">{filter.currentCategory}</span>
              <ul className="case-filter__dropdown">
                {filter.currentCategory != "All categories" && (
                  <li
                    className="case-filter__dropdown-item"
                    onClick={() => {
                      props.filterParent("all", undefined);
                      setFilter({
                        ...filter,
                        currentCategory: "All categories"
                      });
                    }}
                  >
                    All categories
                  </li>
                )}
                {props.categories.map((c, i) => {
                  const title = c.charAt(0).toUpperCase() + c.slice(1);
                  return filter.currentCategory != title ? (
                    <li
                      className="case-filter__dropdown-item"
                      onClick={() => {
                        props.filterParent(c, undefined);
                        setFilter({ ...filter, currentCategory: title });
                      }}
                      key={i}
                    >
                      {title}
                    </li>
                  ) : null;
                })}
              </ul>
            </li>
          </ul>
        )}
        <span className="case-filter__description">in</span>
        {props.industries && (
          <ul className="case-filter__menu case-filter__menu--industries">
            <li className="case-filter__menu-item">
              <span className="case-filter__all">{filter.currentIndustry}</span>
              <ul className="case-filter__dropdown">
                {filter.currentIndustry != "All industries" && (
                  <li
                    className="case-filter__dropdown-item"
                    onClick={() => {
                      props.filterParent(undefined, "all");
                      setFilter({
                        ...filter,
                        currentIndustry: "All industries"
                      });
                    }}
                  >
                    All industries
                  </li>
                )}
                {props.industries.map((c, i) => {
                  const title = c.charAt(0).toUpperCase() + c.slice(1);
                  return filter.currentIndustry != title ? (
                    <li
                      className="case-filter__dropdown-item"
                      onClick={() => {
                        props.filterParent(undefined, c);
                        setFilter({
                          ...filter,
                          currentIndustry: title
                        });
                      }}
                      key={i}
                    >
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </li>
                  ) : null;
                })}
              </ul>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Filter;
