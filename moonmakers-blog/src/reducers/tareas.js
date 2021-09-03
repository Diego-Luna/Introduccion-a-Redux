/* eslint-disable import/no-anonymous-default-export */
import { TRAER_TODAS, CARGANDO, ERROR } from "../Types/tareasTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return {
        ...state,
        tareas: action.payload,
        cargando: false,
        error: ""
      };

    case CARGANDO:
      return {
        ...state,
        cargando: true,
      };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    default:
      return state;
  }
};
