import styles from "./CharacterCard.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deleteCharacter, addFavorites, delFavorites } from "../../redux/actions";

const CharacterCard = (props) => {

    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch();
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if (isFav){
            setIsFav (false);
            dispatch(delFavorites(props.id));
        } else {
            setIsFav (true);
            dispatch(addFavorites(props));
        }
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
           if (fav.id === props.id) {
              setIsFav(true);
           }
        });
     }, [myFavorites]);

    return(
        <div className={styles.divCard}>
            <div className={styles.descripText}>
            {isFav ? (<button  className={styles.buttonFav} onClick={handleFavorite}>❤️</button>) : (<button  className={styles.buttonFav} onClick={handleFavorite}>🤍</button>)}
            <button className={styles.buttonX} onClick={()=> dispatch(deleteCharacter(props.id))}>X</button>
            </div>
            <Link to = {`/detail/${props.id}`}><img src={props.image} alt= {props.name} /></Link>
            <h1 className={styles.nameText}>{props.name}</h1>
            <div className={styles.descripText}>
            <h3 className={styles.generS}>{props.gender}</h3>
            <h3 className={styles.speciesS}>{props.species}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;