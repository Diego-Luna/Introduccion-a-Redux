import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";

const Posts = (props) => {
  const { key } = useParams();

  useEffect(() => {
    if (!props.usuarios.length) {
      // console.log("traelos");
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

const mapStateToProps = (reducers) => {
  return reducers.usuarios;
};

export default connect(mapStateToProps, usuariosAction)(Posts);
