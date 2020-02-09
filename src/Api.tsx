import axios from "axios";
import React, { useEffect, useState } from "react";
import { ComisStrip } from "./comicStrip.interface";
import Form from "./Form";
import Table from "./Table";

const url = "http://stapi.co/api/v1/rest/comicStrip/search";

const App = () => {
  const [comicStrips, setComicStrips] = useState([] as ComisStrip[]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setComicStrips(result.data.comicStrips.slice(0, 4));
    };

    fetchData();
  }, []);

  function removeComicStrip(index: number): void {
    setComicStrips(
      comicStrips.filter((comicStrip: ComisStrip, i: number) => {
        return i !== index;
      })
    );
  }

  function handleSubmit(comicStrip: ComisStrip): void {
    setComicStrips([...comicStrips, comicStrip]);
  }

  return (
    <div className="container">
      <Table
        comicStripData={comicStrips}
        removeComicStrip={removeComicStrip}
        header={[
          {
            name: "Title",
            prop: "title"
          },
          {
            name: "Year",
            prop: "publishedYearFrom"
          }
        ]}
      />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
