import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import Characters from "./components/characters/Characters";
import CharacterDetail from "./components/characterDetail/CharacterDetail";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

function App() {

  const location = useLocation();

  return (
    <div align ="center">
      <div className="divNav">
      {location.pathname !== "/" && <Nav/>}
      </div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/home' element={<Characters/>} />
        <Route path='/detail/:id' element={<CharacterDetail/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
