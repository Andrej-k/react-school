import React, { useState } from "react";

const initialState = {
  title: "",
  publishedYearFrom: ""
};

const Form = ({ handleSubmit }) => {
  const [state, setState] = useState({ title: "", publishedYearFrom: "" });

  const handleChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  const submitForm = () => {
    handleSubmit(state);
    setState(initialState);
  };

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={state.title}
        onChange={handleChange}
      />
      <label htmlFor="publishedYearFrom">Year</label>
      <input
        type="number"
        name="publishedYearFrom"
        id="publishedYearFrom"
        value={state.publishedYearFrom}
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
