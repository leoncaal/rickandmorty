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
  RESET,
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
  return async function (dispatch) {
    const response = await axios(
      `http://localhost:3001/rickandmorty/detail/${id}`
    );
    return dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

export const getCharacter = (character) => {
  return async function (dispatch) {

    try {
       const response = await axios(
      `http://localhost:3001/rickandmorty/onsearch/${character}`
    );
    
      return dispatch({ type: GET_CHARACTER, payload: response.data });

      
    } catch (error) {
      window.alert(error.response.data);
    }

   
  };
};

export const deleteCharacter = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};

export const addFavorites = (character) => {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    return dispatch({ type: ADD_FAV, payload: response.data });
  };
};

export const delFavorites = (id) => {
  return async function (dispatch) {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );
    return dispatch({ type: DEL_FAV, payload: response.data });
  };
};

export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};

export const reset = () => {
  return { type: RESET };
};

export const cleanCharacterDetail = () => {
  return { type: CLEAN_CHARACTER_DETAIL };
};
