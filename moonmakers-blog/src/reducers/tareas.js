/* eslint-disable import/no-anonymous-default-export */
import {
  TRAER_TODAS,
  CARGANDO,
  ERROR,
  CAMBIO_USUARIO_ID,
  CAMBIO_TITULO,
  AGREGAR,
} from "../Types/tareasTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: "",
  usuario_id: "",
  titulo: "",
  regresar: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return {
        ...state,
        tareas: action.payload,
        cargando: false,
        regresar: false,
        error: "",
      };

    case CARGANDO:
      return {
        ...state,
        cargando: true,
      };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    case CAMBIO_USUARIO_ID:
      return { ...state, usuario_id: action.payload };

    case CAMBIO_TITULO:
      return { ...state, titulo: action.payload };
    case AGREGAR:
      return {
        ...state,
        tareas: {},
        cargando: false,
        error: "",
        regresar: true,
        usuario_id: "",
        titulo: "",
      };

    default:
      return state;
  }
};
