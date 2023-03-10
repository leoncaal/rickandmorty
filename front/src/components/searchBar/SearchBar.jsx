import styles from './SearchBar.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacter } from "../../redux/actions";

const SearchBar = () => {

    const dispatch = useDispatch();
    const[character, setCharacter] = useState('');

    const handleChange = ( event ) =>{ 
        setCharacter(event.target.value);
    }
    const handleClick = () => {
        dispatch(getCharacter(character))
        setCharacter('');
    }

    return(
        <div className={styles.divAgregar}>
            <input className={styles.inpAgregar} type="search" value={character} onChange={handleChange} placeholder="ID Character"/> 
            <button className={styles.btnAgregar} onClick= {handleClick}>Agregar</button>
        </div>
    )
}

export default SearchBar