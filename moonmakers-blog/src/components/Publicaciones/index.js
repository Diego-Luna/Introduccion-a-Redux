import React, { Component } from "react";

import { connect } from "react-redux";

import Cargando from "../General/Spinner";
import Error from "../General/Error";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

const { traerTodos: usuariosTraerTodos } = usuariosAction;
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions;

// const Posts = (props) => {
class Posts extends Component {
  async componentDidMount() {
    const {
      usuariosTraerTodos,
      publicacionesTraerPorUsuario,
      match: {
        params: { key },
      },
    } = this.props;

    // los estados no se pueden destructurar
    if (!this.props.usuariosReducer.usuarios.length) {
      await usuariosTraerTodos();
    }

    if (this.props.usuariosReducer.error) {
      return;
    }
    // si no tenemos publicaciones_key, lo llamamos
    if (!("publicaciones_key" in this.props.usuariosReducer.usuarios[key])) {
      publicacionesTraerPorUsuario(key);
    }
  }

  ponerUsuario = () => {
    const {
      usuariosReducer,
      match: {
        params: { key },
      },
    } = this.props;

    if (usuariosReducer.error) {
      return <Error mensaje={usuariosReducer.error} />;
    }
    if (!usuariosReducer.usuarios.length || usuariosReducer.cargando) {
      return <Cargando />;
    }

    const nombre = usuariosReducer.usuarios[key].name;

    return <h1>Publicaciones de {nombre}</h1>;
  };

  ponerPublicaciones = () => {
    const {
      usuariosReducer,
      usuariosReducer: { usuarios },
      publicacionesReducer,
      publicacionesReducer: { publicaciones },
      match: {
        params: { key },
      },
    } = this.props;

    if (!usuarios.length) {
      return;
    }

    if (usuariosReducer.error) {
      return;
    }

    if (publicacionesReducer.cargando) {
      return <Cargando />;
    }
    if (publicacionesReducer.error) {
      return <Error mensaje={publicacionesReducer.error} />;
    }

    if (!publicaciones.length) {
      return;
    }

    if (!("publicaciones_key" in usuarios[key])) {
      return;
    }

    const { publicaciones_key } = usuarios[key];
    return publicaciones[publicaciones_key].map((publicacion) => (
      <div
        key={publicacion.id}
        className="pub_titulo"
        onClick={() => alert(publicacion.id)}
      >
        <h2>{publicacion.title}</h2>
        <h3>{publicacion.body}</h3>
      </div>
    ));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.ponerUsuario()}
        {this.ponerPublicaciones()}
      </div>
    );
  }
}
const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicacionesTraerPorUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
