import styles from './CharacterDetail.module.css';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail, cleanCharacterDetail } from "../../redux/actions";

const CharacterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const characterDetail = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    return () => dispatch(cleanCharacterDetail())
  }, []);

  return (
    <div className={styles.divDetail}>
      <div>
        <img src={characterDetail.image} alt={characterDetail.name} />
      </div>
      
      <div className={styles.divProps}>
        <h1>{`Nombre: ${characterDetail.name}`}</h1>
        <h3>{`Genero: ${characterDetail.gender}`}</h3>
        <h3>{`Especie: ${characterDetail.species}`}</h3>
        <h3>{`Estatus: ${characterDetail.status}`}</h3>
        <h3>{`Origen ${characterDetail.origin?.name}`}</h3>
      </div>
      
    </div>
  );
};

export default CharacterDetail;
