import styles from "./Characters.module.css";
//import { useEffect } from "react";
import { useSelector } from "react-redux";
//import { getCharacter } from "../../redux/actions";
import CharacterCard from "../../components/characterCard/CharacterCard";

const Characters = () => {
  //const dispatch = useDispatch();
  const characters = useSelector((state) => state.character);

  /* useEffect(() => {
    dispatch(getCharacter())
  }, []); */

  return (
    <div className={styles.divCards}>
      {characters.map((character) => {
        return(
         <div className={styles.divCard} key={character.id}>
          <CharacterCard
            key={character.id}
            name={character.name}
            id={character.id}
            gender={character.gender}
            species={character.species}
            image={character.image}
          />
          </div>)
      })}
    </div>
  );
};

export default Characters;
