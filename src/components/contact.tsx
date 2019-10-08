import * as React from "react";

function ContactComponent(): JSX.Element {
  return (
    <div className="contact">
      <div className="contact__inner container">
        <header className="contact__header">
          <h2 className="contact__title">
            Question?
            <br />
            We are here to help!
          </h2>
        </header>
        <form action="" className="contact__form">
          <label className="form__item form__item--name">
            Name
            <input type="text" name="name" className="form__input" />
          </label>

          <label className="form__item form__item--email">
            Email
            <input type="text" name="email" className="form__input" />
          </label>

          <label className="form__item form__item--message">
            Message
            <textarea
              name="message"
              className="form__input form__input--textarea"
            />
          </label>
          <footer className="form__footer">
            <button className="btn btn--blue">Send</button>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default ContactComponent;
