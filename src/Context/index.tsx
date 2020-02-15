import axios from "axios";
import React, { useEffect, useState } from "react";
import { ComicStrip } from "../Interface/comicStrip.interface";

const url = "http://stapi.co/api/v1/rest/comicStrip/search";

const ThemeContext = React.createContext({});

const ThemeProvider = (props: any) => {
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

  const header = [
    {
      name: "Title",
      prop: "title"
    },
    {
      name: "Year",
      prop: "publishedYearFrom"
    }
  ];

  return (
    <ThemeContext.Provider
      value={{
        comicStrips,
        removeComicStrip,
        header,
        handleSubmit
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
