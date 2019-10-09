import * as React from "React";

function Case(props: CaseProps): JSX.Element {
  return (
    <article
      className={`case-column case-column--${
        props.type == "default"
          ? "half"
          : props.type == "featured"
          ? "featured"
          : props.type == "side"
          ? "side"
          : ""
      }`}
      key={props.id}
    >
      <a href="#" className="case__link-outer">
        <div className="case-column__inner">
          {props.type != "side" && (
            <div className="case__visual">
              <img
                src={`https://picsum.photos/id/${
                  props.image_url ? props.image_url : "1"
                }/1000/600`}
                alt=""
                className="case__image"
              />
            </div>
          )}

          <div className="case__content">
            <span className="case__client-name title--s">{props.name}</span>
            <h3 className="case__title">{props.title}</h3>
            <a href="#" className="case__link">
              View case
            </a>
          </div>
        </div>
      </a>
    </article>
  );
}

export default Case;
