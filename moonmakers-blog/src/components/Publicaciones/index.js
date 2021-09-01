import React, { Component } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

const { traerTodos: usuariosTraerTodos } = usuariosAction;
const { traerTodos: publicacionesTraerTodos } = publicacionesActions;

// const Posts = (props) => {
class Posts extends Component {
  componentDidMount() {
    if (!this.props.usuariosReducer.usuarios.length) {
      this.props.usuariosTraerTodos();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de</h1>
        {this.props.match.params.key}
      </div>
    );
  }
}
const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicacionesTraerTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
