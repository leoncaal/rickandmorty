import {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_DETAIL,
  DELETE_CHARACTER,
  CLEAN_CHARACTER_DETAIL,
  ADD_FAV,
  DEL_FAV,
  FILTER,
  ORDER,
  RESET
} from "./actions-type";
import axios from "axios";

export const getAllCharacters = () => {
  return function (dispatch) {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        return dispatch({ type: GET_ALL_CHARACTERS, payload: data.results });
      });
  };
};

export const getCharacterDetail = (id) => {
  return function (dispatch) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        return dispatch({ type: GET_CHARACTER_DETAIL, payload: data });
      });
  };
};

export const getCharacter = (character) => {

  return function (dispatch) {
    //axios(`https://rickandmortyapi.com/api/character/${character}`)
    axios(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
            return dispatch({ type: GET_CHARACTER, payload: data })
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
};

export const deleteCharacter = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};

export const addFavorites = (character) => {
  return { type: ADD_FAV, payload: character };
};

export const delFavorites = (id) => {
  return { type: DEL_FAV, payload: id };
};

export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};

export const reset = () => {
  return {type: RESET}
}

export const cleanCharacterDetail = () => {
  return { type: CLEAN_CHARACTER_DETAIL };
};
