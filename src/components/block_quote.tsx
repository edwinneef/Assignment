import * as React from "react";

type QuoteProps = {
  text: string;
  author?: string;
  function?: string;
  company?: string;
};

function Quote(props: QuoteProps): JSX.Element {
  let author: string;
  let authorFunction: string;

  author = props.author ? props.author : "";
  authorFunction = props.function ? props.function : "";
  authorFunction = props.company
    ? authorFunction != ""
      ? `${authorFunction}, ${props.company}`
      : props.company
    : authorFunction;

  return (
    <div className="quote">
      <div className="quote__inner container">
        <div className="quote__content">
          <div className="quote__text">{props.text}</div>

          {author && (
            <div className="quote__info">
              {author}
              {authorFunction && ` - ${authorFunction}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quote;
