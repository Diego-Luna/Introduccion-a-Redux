import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../Types/publicacionesTypes";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    console.log("Error en traerTodos: ");
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Algo salió mal, intente mas tarde",
    });
  }
};

// usamos el key, que nos se pone, al momento de llamar la funcion
// usamos getState, para traer el estado actual
export const traerPorUsuario = (key) => async (dispatch, getState) => {
  // sacamos el id del usuarios
  const { usuarios } = getState().usuariosReducer;
  const usuario_id = usuarios[key].id;

  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(
      `http://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`
    );
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    console.log("Error en traerTodos: ");
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Algo salió mal, intente mas tarde",
    });
  }
};
