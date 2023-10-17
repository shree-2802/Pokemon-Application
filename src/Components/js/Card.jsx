import React from "react";
import styles from "../css/Card.module.css";
import water from "../images/Water.jpg";
function Card({ pokemon, loading, infoPoke }) {
  return (
    <>
      {loading ? (
        <div className={styles.Card}>
          <h1 style={{color:'white'}}>Loading</h1>
        </div>
      ) : (
        <div className={styles.Card}>
          <div className={styles.displayContent}>
            {pokemon.map((items) => {
              return (
                <div key={items.id} onClick={()=>infoPoke(items)}>
                  <p>{items.id}</p>
                  <p>{items.name}</p>
                  <img src={items.sprites.back_default} />
                </div>
              );
            })}
          </div>
          
        </div>
      )}
    </>
  );
}

export default Card;
