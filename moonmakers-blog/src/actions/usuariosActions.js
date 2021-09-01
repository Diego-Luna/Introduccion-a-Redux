import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR_USER } from "../Types/usuauiosTypes";

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
    console.log(error.message);
    dispatch({
      type: ERROR_USER,
      payload: "Algo salió mal, intente mas tarde",
    });
  }
};
