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

  gruardar = () => {
    const { usuario_id, titulo, agregar } = this.props;
    const nuevaTarea = {
      userId: usuario_id,
      title: titulo,
      completed: false,
    };

    agregar(nuevaTarea);
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
