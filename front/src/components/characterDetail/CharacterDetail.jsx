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
    <div>
      <img src={characterDetail.image} alt={characterDetail.name} />
      <h1>{characterDetail.name}</h1>
      <h3>{characterDetail.gender}</h3>
      <h3>{characterDetail.species}</h3>
      <h3>{characterDetail.status}</h3>
      <h3>{characterDetail.origin?.name}</h3>
    </div>
  );
};

export default CharacterDetail;
