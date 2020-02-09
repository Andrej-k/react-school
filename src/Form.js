import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
      <TextField required type="text" name="title" id="title" value={state.title} label="Title" variant="outlined" size="small" fullWidth onChange={handleChange} />
      <label htmlFor="publishedYearFrom">Year</label>
      <TextField required type="number" name="publishedYearFrom" id="publishedYearFrom" value={state.publishedYearFrom} label="Year" variant="outlined" size="small" fullWidth onChange={handleChange} />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        value="Submit"
        onClick={submitForm}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
