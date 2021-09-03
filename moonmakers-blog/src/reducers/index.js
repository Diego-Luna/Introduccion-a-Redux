import { combineReducers } from "redux";
import usuariosReducer from "./usuarios";
import publicacionesReducer from "./publicaciones";
import tareasReducer from "./tareas"

export default combineReducers({ usuariosReducer, publicacionesReducer, tareasReducer });
