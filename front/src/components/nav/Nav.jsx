import styles from './Nav.module.css';
import { Link } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"

const Nav = () => {
    return (
        <div className={styles.divNav}>
            <div className={styles.divButton}>
                <Link to={'/home'}><button className={styles.button}>Home</button></Link>
                <Link to={'/favorites'}><button className={styles.button}>Favorites</button></Link>
                <Link to={'/about'}><button className={styles.button}>About</button></Link>
                <Link to={'/'}><button className={styles.button}>Logout</button></Link> 
            </div>
            
            <div className={styles.divSearch}> <SearchBar></SearchBar></div>
           
        </div>
    )
}

export default Nav