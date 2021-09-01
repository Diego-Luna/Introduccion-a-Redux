import axios from "axios";
import {
  TRAER_POR_USUARIO,
  CARGANDO,
  ERROR,
} from "../Types/publicacionesTypes";

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

    // evitamos que se agan segundas busquedas en los post
    const { publicaciones } = getState().publicacionesReducer;
    const publicaciones_actualizadas = [...publicaciones, respuesta.data];

    dispatch({
      type: TRAER_POR_USUARIO,
      payload: publicaciones_actualizadas,
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
