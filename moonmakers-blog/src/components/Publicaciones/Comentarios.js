import React from "react";

import { connect } from "react-redux";

import Cargando from "../General/Spinner";
import Error from "../General/Error";

const Comentarios = (props) => {
  if (props.com_error) {
    return <Error mensaje={props.com_error} />;
  }
  if (props.com_cargando && !props.comentarios.length) {
    return <Cargando />;
  }

  const ponerComentarios = () =>
    props.comentarios.map((comentario) => (
      <li>
        <b>
          <u>{comentario.email}</u>
        </b>
        <br />
        <p>{comentario.body}</p>
      </li>
    ));

  return <ul>{ponerComentarios()}</ul>;
};

const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps, {})(Comentarios);
