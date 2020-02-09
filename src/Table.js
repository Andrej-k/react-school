import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const row = (x, i, header, removeComicStrip) => (
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) => (
      <TableCell key={`trc-${k}`}>{x[y.prop]}</TableCell>
    ))}
    <TableCell>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => removeComicStrip(i)}
      >
        Delete
      </Button>
    </TableCell>
  </TableRow>
);

export default ({ comicStripData, removeComicStrip, header }) => (
  <Table>
    <TableHead>
      <TableRow>
        {header.map((x, i) => (
          <TableCell key={`thc-${i}`}>{x.name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {comicStripData.map((x, i) => row(x, i, header, removeComicStrip))}
    </TableBody>
  </Table>
);
