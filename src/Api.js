import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

const url = "http://stapi.co/api/v1/rest/comicStrip/search";

const App = () => {
  const [comicStrips, setComicStrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setComicStrips(result.data.comicStrips.slice(0, 4));
    };

    fetchData();
  }, []);

  const removeComicStrip = index => {
    setComicStrips(
      comicStrips.filter((comicStrip, i) => {
        return i !== index;
      })
    );
  };

  const handleSubmit = comicStrip => {
    setComicStrips([...comicStrips, comicStrip]);
  };

  return (
    <div className="container">
      <Table comicStripData={comicStrips} removeComicStrip={removeComicStrip} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
