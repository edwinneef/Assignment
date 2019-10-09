import * as React from "react";
import { formatWithOptions } from "util";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormHook = {
  errorFields: string[];
  errorMessage: string;
  isSent: boolean;
  formFields: FormFields;
};

type FormFieldNames = "name" | "email" | "message";

function Contact(): JSX.Element {
  const [form, setForm] = React.useState<FormHook>({
    errorFields: [],
    errorMessage: "",
    isSent: false,
    formFields: {
      name: "",
      email: "",
      message: ""
    }
  });

  function requiredIsFilled(): boolean {
    const F: FormFields = form.formFields;
    if (F.name != "" && F.email != "" && F.message) {
      return true;
    } else {
      let emptyFields: string[] = [];
      F.name == "" && emptyFields.push("name");
      F.email == "" && emptyFields.push("email");
      F.message == "" && emptyFields.push("message");

      setForm({
        ...form,
        errorMessage: `The following fields are required: ${emptyFields.join(
          ", "
        )}`,
        errorFields: emptyFields
      });
      return false;
    }
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    !requiredIsFilled()
      ? console.log(form.errorMessage)
      : setForm({
          ...form,
          errorFields: [],
          formFields: { name: "", email: "", message: "" },
          isSent: true
        });
  }

  function handleChange(e: string, type: FormFieldNames) {
    setForm({
      ...form,
      formFields: {
        name: type == "name" ? e : form.formFields.name,
        email: type == "email" ? e : form.formFields.email,
        message: type == "message" ? e : form.formFields.message
      }
    });
  }

  const nameError: boolean = form.errorFields.includes("name");
  const emailError: boolean = form.errorFields.includes("email");
  const messageError: boolean = form.errorFields.includes("message");

  const requiredField: string = "This field is required";
  const successMessage: string = "Your email has been sent. Thanks!";

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
        {!form.isSent ? (
          <form className={`contact__form`}>
            <label className="form__item form__item--name">
              Name
              <input
                type="text"
                name="name"
                onChange={e => handleChange(e.currentTarget.value, "name")}
                className={`form__input${
                  nameError ? " form__input--error" : ""
                }`}
                value={form.formFields.name}
              />
              {nameError && (
                <span className="input__error">{requiredField}</span>
              )}
            </label>
            <label className="form__item form__item--email">
              Email
              <input
                type="text"
                name="email"
                className={`form__input${
                  emailError ? " form__input--error" : ""
                }`}
                onChange={e => handleChange(e.currentTarget.value, "email")}
                value={form.formFields.email}
              />
              {emailError && (
                <span className="input__error">{requiredField}</span>
              )}
            </label>
            <label className="form__item form__item--message">
              Message
              <textarea
                name="message"
                className={`form__input form__input--textarea${
                  messageError ? " form__input--error" : ""
                }`}
                onChange={e => handleChange(e.currentTarget.value, "message")}
                value={form.formFields.message}
              />
              {messageError && (
                <span className="input__error">{requiredField}</span>
              )}
            </label>
            <footer className="form__footer">
              <button className="btn btn--blue" onClick={e => handleSubmit(e)}>
                Send
              </button>
            </footer>
          </form>
        ) : (
          <div>{successMessage}</div>
        )}
      </div>
    </div>
  );
}

export default Contact;
