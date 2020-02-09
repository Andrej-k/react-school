import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import { ComicStrip } from "./Interface/comicStrip.interface";

const url = "http://stapi.co/api/v1/rest/comicStrip/search";

const App = () => {
  const [comicStrips, setComicStrips] = useState([] as ComicStrip[]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setComicStrips(result.data.comicStrips.slice(0, 4));
    };

    fetchData();
  }, []);

  function removeComicStrip(index: number): void {
    setComicStrips(
      comicStrips.filter((comicStrip: ComicStrip, i: number) => {
        return i !== index;
      })
    );
  }

  function handleSubmit(comicStrip: ComicStrip): void {
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
