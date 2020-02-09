import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: "50px"
  },
  button: {
    marginTop: "20px"
  },
  errorText: {
    color: "red",
    fontFamily: "Roboto",
    fontSize: "12px"
  }
}));

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

  const classes = useStyles();

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <TextField
        error={formik.touched.title && (formik.errors.title ? true : false)}
        type="text"
        name="title"
        id="title"
        label="Title"
        placeholder="Enter title"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.touched.title && formik.errors.title ? (
        <div className={classes.errorText}>{formik.errors.title}</div>
      ) : null}
      <TextField
        error={
          formik.touched.publishedYearFrom &&
          (formik.errors.publishedYearFrom ? true : false)
        }
        type="number"
        name="publishedYearFrom"
        id="publishedYearFrom"
        label="Year"
        placeholder="Enter year"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        value={formik.values.publishedYearFrom}
        onChange={formik.handleChange}
      />
      {formik.touched.publishedYearFrom && formik.errors.publishedYearFrom ? (
        <div className={classes.errorText}>
          {formik.errors.publishedYearFrom}
        </div>
      ) : null}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
