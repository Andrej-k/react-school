import axios from "axios";
import React, { useEffect, useState } from "react";
import { ComicStrip } from "../Interface/comicStrip.interface";

const url = "http://stapi.co/api/v1/rest/comicStrip/search";

const ThemeContext = React.createContext({});

const ThemeProvider = (props: any) => {
  const [comicStrips, setComicStrips] = useState([] as ComicStrip[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setComicStrips(result.data.comicStrips.slice(0, 4));
        setLoading(false);
      } catch (e) {
        if (e) {
          console.log(e.message);
        }
      }
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
        handleSubmit,
        loading
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
