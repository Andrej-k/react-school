import Button from "@material-ui/core/Button";
import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.comicStripData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.publishedYearFrom}</td>
        <td>
          <Button
            variant="contained"
            color="primary"
            value="Submit"
            onClick={() => props.removeComicStrip(index)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = props => {
  const { comicStripData, removeComicStrip } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        comicStripData={comicStripData}
        removeComicStrip={removeComicStrip}
      />
    </table>
  );
};

export default Table;
