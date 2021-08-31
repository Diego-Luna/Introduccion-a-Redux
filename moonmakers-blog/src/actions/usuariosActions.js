import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../Types/usuauiosTypes";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    console.log("Error en traerTodos: ");
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
