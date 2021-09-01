import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

const Posts = (props) => {
  const { key } = useParams();

  useEffect(() => {
    if (!props.usuariosReducer.usuarios.length) {
      console.log("traelos");
      props.traerTodos();
    }
  });

  console.log(props);

  return (
    <div>
      <h1>Publicaciones</h1>
      {key}
    </div>
  );
};

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  ...usuariosAction,
  ...publicacionesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
