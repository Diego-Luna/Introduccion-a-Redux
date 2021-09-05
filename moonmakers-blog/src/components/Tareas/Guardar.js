import React, { Component } from "react";
import { connect } from "react-redux";

// redirigimos
import { Redirect } from "react-router-dom";

import Cargar from "../General/Spinner";
import Error from "../General/Error";

import * as tareasActions from "../../actions/tareasActions";

class Guardar extends Component {
  cambioUsuarioId = (event) => {
    this.props.cambioUsuarioId(event.target.value);
  };
  cambioTitulo = (event) => {
    this.props.cambioUsuarioTitulo(event.target.value);
  };

  componentDidMount() {
    const {
      match: {
        params: { usu_id, tar_id },
      },
      tareas,
      cambioUsuarioId,
      cambioUsuarioTitulo,
    } = this.props;

    if (usu_id && tar_id) {
      const tarea = tareas[usu_id][tar_id];
      cambioUsuarioId(tarea.userId);
      cambioUsuarioTitulo(tarea.title);
    }
  }

  gruardar = () => {
    const {
      usuario_id,
      titulo,
      agregar,
      match: {
        params: { usu_id, tar_id },
      },
      tareas,
      editar,
    } = this.props;
    const nuevaTarea = {
      userId: usuario_id,
      title: titulo,
      completed: false,
    };

    if (usu_id && tar_id) {
      const tarea = tareas[usu_id][tar_id];
      const tarea_editada = {
        ...nuevaTarea,
        completed: tarea.completed,
        id: tarea.id,
      };

      editar(tarea_editada);
    } else {
      agregar(nuevaTarea);
    }
  };

  deshabilitar = () => {
    const { usuario_id, titulo, cargando } = this.props;
    if (cargando) {
      return true;
    }
    if (!usuario_id || !titulo) {
      return true;
    }
    return false;
  };

  mostartAccion = () => {
    const { error, cargando } = this.props;
    if (cargando) {
      return <Cargar />;
    }
    if (error) {
      return <Error mensaje={error} />;
    }
  };

  render() {
    return (
      <div>
        {this.props.regresar ? <Redirect to="/tareas" /> : ""}
        <h1>Guardar Tarea</h1>
        Usuarios Id:
        <input
          type="number"
          value={this.props.usuario_id}
          onChange={this.cambioUsuarioId}
        />
        <br />
        <br />
        Titulo:
        <input value={this.props.titulo} onChange={this.cambioTitulo} />
        <br />
        <br />
        <button disabled={this.deshabilitar()} onClick={this.gruardar}>
          Guardar
        </button>
        {this.mostartAccion()}
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);
