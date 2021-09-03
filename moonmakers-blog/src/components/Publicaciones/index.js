import React, { Component } from "react";

import { connect } from "react-redux";

import Cargando from "../General/Spinner";
import Error from "../General/Error";
import Comentarios from "./Comentarios";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

const { traerTodos: usuariosTraerTodos } = usuariosAction;
const {
  traerPorUsuario: publicacionesTraerPorUsuario,
  abrirCerrar,
  traerCometarios,
} = publicacionesActions;

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
    return this.mostrarInfo(
      publicaciones[publicaciones_key],
      publicaciones_key
    );
  };

  mostrarInfo = (publicaciones, pub_key) =>
    publicaciones.map((publicacion, com_key) => (
      <div
        key={publicacion.id}
        className="pub_titulo"
        onClick={() =>
          this.mostartComentarios(pub_key, com_key, publicacion.comentarios)
        }
      >
        <h2>{publicacion.title}</h2>
        <h3>{publicacion.body}</h3>
        {publicacion.abierto ? <Comentarios /> : ""}
      </div>
    ));

  mostartComentarios = (pub_key, com_key, comentarios) => {
    this.props.abrirCerrar(pub_key, com_key);
    this.props.traerCometarios(pub_key, com_key);
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
  abrirCerrar,
  traerCometarios
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
