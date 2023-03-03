import { Link } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"

const Nav = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <Link to={'/home'}>Home</Link>
            <Link to={'/favorites'}>Favorites</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Logout</Link>
        </div>
    )
}

export default Nav