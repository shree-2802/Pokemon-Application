import React from "react";
import styles from "../css/Context.module.css";
import Pikachu from "../images/pikachu.png";

function Context({ poke }) {
  // const ability=async(poke)=>{
  //   const pokeAbility=axios.get(poke)
  // }
  console.log(poke);
  return (
    <>
      {!poke ? (
        <div className={styles.Context}>
          <div className={styles.pikachuDiv}>
            <img src={Pikachu} className={styles.pikachu} />
          </div>
        </div>
      ) : (
        <div className={styles.Context}>
          <h1>{poke.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
          />
          <div className={styles.desc}>
            <div>{poke.abilities[0].ability.name}</div>
            <div>{poke.abilities[1].ability.name}</div>
          </div>
          <div>
            {poke.stats.map((items) => {
              return (
                <React.Fragment key={items.stat.name}>
                  <p>{items.stat.name}:{items.base_stat}</p>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Context;
