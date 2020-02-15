import {
  CircularProgress,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core";
import React, { useContext } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import { ThemeContext } from "./Context/index";

function App() {
  const appContext = useContext(ThemeContext);
  const { loading }: any = appContext;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      loadingText: {
        fontFamily: "Roboto"
      }
    })
  );

  const classes = useStyles();

  return (
    <div className="container">
      {loading ? (
        <div className={classes.root}>
          <CircularProgress color="secondary" />
          <h2 className={classes.loadingText}>loading</h2>
        </div>
      ) : (
        <div>
          <Table />
          <Form />
        </div>
      )}
    </div>
  );
}

export default App;
