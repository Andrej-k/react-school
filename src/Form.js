import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Form = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      publishedYearFrom: ""
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Required"),
      publishedYearFrom: Yup.number()
        .min(1900, "Must be 1900 or more")
        .max(2100, "Must be 2100 or less")
        .required("Required")
    }),
    onSubmit: values => {
      handleSubmit(values);
      formik.resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <TextField
        type="text"
        name="title"
        id="title"
        label="Title"
        variant="outlined"
        size="small"
        fullWidth
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}
      <label htmlFor="publishedYearFrom">Year</label>
      <TextField
        type="number"
        name="publishedYearFrom"
        id="publishedYearFrom"
        label="Year"
        variant="outlined"
        size="small"
        fullWidth
        value={formik.values.publishedYearFrom}
        onChange={formik.handleChange}
      />
      {formik.touched.publishedYearFrom && formik.errors.publishedYearFrom ? (
        <div>{formik.errors.publishedYearFrom}</div>
      ) : null}
      <Button type="submit" variant="contained" color="primary" value="Submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
