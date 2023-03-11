import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import validation from "./validation";
import { useNavigate } from "react-router-dom";

function Form() {

  const navigate = useNavigate();
  
  const username = "leoncaal@gmail.com";
  const password = "123456";
  
  const [access, setAccess] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const array = Object.values(errors);
    if (array.length === 0) {
      alert("Bienvenido");
      login(userData);
      setUserData({
        username: "",
        password: "",
      });
    } else {
      alert("Debes llenar todos los campos");
    }
  };

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
    /* // eslint-disable-next-line */
  }, [access]);

  return (
    <div className={styles.divAux}>
      <h1></h1>
    <div className={styles.divForm}>
       
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        ></input>
        {errors.username && <p className={styles.danger}>{errors.username}</p>}
        <div className={styles.divDiv}></div>
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        ></input>
        {errors.password && <p className={styles.danger}>{errors.password}</p>}
        <div className={styles.divDiv}></div>
        <button type="submit">LOGIN</button>
      </form> 
      </div>
    </div>
  );
}
export default Form;