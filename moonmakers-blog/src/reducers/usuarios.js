/* eslint-disable import/no-anonymous-default-export */
import { TRAER_TODOS, CARGANDO, ERROR_USER } from "../Types/usuauiosTypes";

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error_user: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        usuarios: action.payload,
        cargando: false,
      };

    case CARGANDO:
      return {
        ...state,
        cargando: true,
      };

    case ERROR_USER:
      return { ...state, error_user: action.payload, cargando: false };

    default:
      return state;
  }
};
