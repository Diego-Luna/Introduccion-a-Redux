import { combineReducers } from "redux";
import usuariosReducer from "./usuarios";
import publicacionesReducer from "./publicaciones";

export default combineReducers({ usuariosReducer, publicacionesReducer });
