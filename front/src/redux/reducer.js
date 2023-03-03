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

const InitialState = {
  characters: [],
  character: [],
  characterDetail: {},
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_CHARACTER:
      let exist = state.character.find((char) => char.id === action.payload.id);
      if (exist) {
        alert("El personaje ya existe");
      } else {
        return {
          ...state,
          character: [...state.character, action.payload],
        };
      }
      return {
        ...state,
      };

    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        character: state.character.filter(
          (character) => character.id !== action.payload
        ),
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case DEL_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (myFavorite) => myFavorite.id !== action.payload
        ),
        allCharacters: state.myFavorites.filter(
          (myFavorite) => myFavorite.id !== action.payload
        ),
      };
    case FILTER:
      const allCharFiltered = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharFiltered,
      };
    case ORDER:
      const orderCopy = [...state.allCharacters];

      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === action.payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };
    /* return {
        ...state,
        myFavorites: 
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      }; */
    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };
    case CLEAN_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
