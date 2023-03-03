import styles from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards, reset } from "../../redux/actions";
import CharacterCard from "../characterCard/CharacterCard";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handlerClick = () => {
    dispatch(reset())
  }

  return (
    <div>
      <div>
        <select defaultValue={"DEFAULT"} onChange={handlerOrder}>
          <option value="DEFAULT" disabled="disable">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select defaultValue={"DEFAULT"} onChange={handlerFilter}>
          <option value="DEFAULT" disabled="disable">
            Filter By
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
        <button onClick={handlerClick}>RESET</button>
      </div>
      <div className={styles.divCards}>
      {myFavorites?.map((favorite) => {
        return (
          <div className={styles.divCard} key={favorite.id}>
          <CharacterCard
          key={favorite.id}
            name={favorite.name}
            id={favorite.id}
            gender={favorite.gender}
            species={favorite.species}
            image={favorite.image}
          />
          </div>

          /* <div className={styles.divCard} key ={favorite.id}>
            <img src={favorite.image} alt={favorite.name} />
            <h1 className={styles.nameText}>{favorite.name}</h1>
            <div className={styles.descripText}>
              <h3 className={styles.generS}>{favorite.gender}</h3>
              <h3 className={styles.speciesS}>{favorite.species}</h3>
            </div>
          </div> */
        );
      })}
      </div>
    </div>
  );
};

export default Favorites;
