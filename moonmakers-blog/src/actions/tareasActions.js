import axios from "axios";
import { TRAER_TODAS, CARGANDO, ERROR } from "../Types/tareasTypes";

export const traerTodas = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    dispatch({
      type: TRAER_TODAS,
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
