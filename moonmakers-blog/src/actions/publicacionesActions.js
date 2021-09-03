import axios from "axios";
import { ACTUALIZAR, CARGANDO, ERROR } from "../Types/publicacionesTypes";

import * as usuariosTypes from "../Types/usuauiosTypes";

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

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

    // cambiamos la respuesta, si estan abiertos los comentarios
    const nuevas = respuesta.data.map((publicacion) => ({
      ...publicacion,
      comentarios: [],
      abierto: false,
    }));

    // evitamos que se agan segundas busquedas en los post
    const { publicaciones } = getState().publicacionesReducer;
    const publicaciones_actualizadas = [...publicaciones, nuevas];

    // le decimos en que selda estan las publicaciones de nuestro usuario
    const publicaciones_key = publicaciones_actualizadas.length - 1;
    const usuarios_actualizados = [...usuarios];
    usuarios_actualizados[key] = {
      ...usuarios[key],
      publicaciones_key,
    };

    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: usuarios_actualizados,
    });

    dispatch({
      type: ACTUALIZAR,
      payload: publicaciones_actualizadas,
    });
  } catch (error) {
    console.log("Error en publicaciones por usuario");
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Informacion de usuario no disponible",
    });
  }
};

// usamos getState, para traer el estado actual
export const abrirCerrar = (pub_key, com_key) => (dispatch, getState) => {
  // En el abrirCerrarActions, selecciono a la publicación que le di click y la guardo en const, y hago otra const que va a tener esa publicación que le di click y modifica la propiedad de abierto por el contrario que tiene !seleccionada.abierto.

  const { publicaciones } = getState().publicacionesReducer;
  const seleccionada = publicaciones[pub_key][com_key];

  const actualisada = {
    ...seleccionada,
    abierto: !seleccionada.abierto,
  };

  // Guardamos en constante a todas las publicaciones de todos los usuarios, seleccionamos de todas las publicaciones la que le corresponden al usuario y desplegamos desplegamos todas las publicaciones de este usuario y por ultimo de todas las publicaciones del usuario, selecciono a la que se le dio click y sera igual a la publicacion pero con el abierto cambiado.

  const publicaciones_actualizadas = [...publicaciones];
  publicaciones_actualizadas[pub_key] = [...publicaciones[pub_key]];

  publicaciones_actualizadas[pub_key][com_key] = actualisada;

  // Hago un **dispatch **mandando el arreglo con todas las publicaciones de los usuarios al PublicacionesReducer, pero a la publicación que se le dio click será igual a la publicación pero con el atributo abierto cambiado.

  dispatch({
    type: ACTUALIZAR,
    payload: publicaciones_actualizadas,
  });
};
