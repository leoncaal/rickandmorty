function validation(userData) {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regexEmail.test(userData.username)) {
    errors.username = "El formato de email es incorrecto";
  }

  if (!userData.username) {
    errors.username = "Ingresa tu nombre de usuario";
  }

  if (userData.username.length > 35) {
    errors.username = "El nombre de usuario no puede ser mayor a 35 caracteres";
  }

  if (!userData.password) {
    errors.password = "Ingresa tu nombre de usuario";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "El password debe tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
}

export default validation;
