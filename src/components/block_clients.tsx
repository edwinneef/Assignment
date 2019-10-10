import * as React from "react";

function Clients(): JSX.Element {
  return (
    <section className="clients">
      <div className="clients__inner">
        <div className="container">
          <header className="clients__header">
            <h2 className="clients__title">Clients</h2>
          </header>

          <div className="clients__intro">
            <div className="text-styled">
              <p>
                We value a great working relationship with our clients above all
                else. It’s why they often come to our parties. It’s also why
                we’re able to challenge and inspire them to reach for the stars.
              </p>
            </div>
          </div>
        </div>

        <ul className="clients__list">
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-2" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-3" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-4" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-4" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-3" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-2" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-2" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-3" />
            </svg>
          </li>
          <li className="clients__list-item">
            <svg className="svg--logo">
              <use xlinkHref="#logo-4" />
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Clients;
