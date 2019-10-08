import * as React from "react";

type QuoteComponentProps = {
  text: string;
  author?: string;
  function?: string;
  company?: string;
};

function QuoteComponent(props: QuoteComponentProps): JSX.Element {
  let author: string;
  let authorFunction : string;

  author = props.author ? props.author : "";
  authorFunction = props.function ? props.function : '';
  authorFunction = props.company ? authorFunction != '' ? `${authorFunction}, ${props.company}` : props.company : authorFunction;

  return (
    <div className="quote">
      <div className="quote__inner container">
        <div className="quote__content">
          <div className="quote__text title--l">
            {props.text}
          </div>

          {author && 
          <div className="quote__info">
            {author}
            {authorFunction && ` - ${authorFunction}`}
          </div>}
          
        </div>
      </div>
    </div>
  );
}

export default QuoteComponent;
