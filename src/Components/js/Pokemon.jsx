import React, { useEffect, useState } from "react";
import Card from "./Card";
import Context from "./Context";
import styles from "../css/Pokemon.module.css";
import axios from "axios";
function Pokemon() {
  const [url, setURL] = useState(" https://pokeapi.co/api/v2/pokemon/");
  const [pokeData, setPokeData] = useState([]);
  const [prevURL, setPrevURL] = useState("");
  const [nextURL, setNextURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [pokeDex, setPokeDex] = useState("");
  const pokeFunction = async () => {
    setLoading(true);
    const res = await axios.get(url);
    console.log(res);
    setPrevURL(res.data.previous);
    setNextURL(res.data.next);
    getPokeData(res.data.results);
    setLoading(false);
    // console.log(pokeData);
  };

  const getPokeData = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFunction();
    // console.log(pokeData);
  }, [url]);

  return (
    <>
      {loading ? (
        <h1 colo>Loading</h1>
      ) : (
        <div className={styles.entire}>
          <div className={styles.Pokemon}>
            <Card
              pokemon={pokeData}
              loading={loading}
              infoPoke={(poke) => {
                setPokeDex(poke);
              }}
              prevURL={prevURL}
              nextURL={nextURL}
            />
            <Context poke={pokeDex} />
          </div>
          <div className={styles.buttonSection}>
            {prevURL && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setURL(prevURL);
                }}
              >
                Previous
              </button>
            )}
            {nextURL && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setURL(nextURL);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Pokemon;
