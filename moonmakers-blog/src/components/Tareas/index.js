import React, { Component } from "react";
import { connect } from "react-redux";

import Cargando from "../General/Spinner";
import Error from "../General/Error";

import * as tareasActions from "../../actions/tareasActions";

class Tareas extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tareas).length) {
      this.props.traerTodas();
    }
  }

  mostrarContenido = () => {
    const { tareas, cargando, error } = this.props;

    if (cargando) {
      return <Cargando />;
    }

    if (error) {
      return <Error mensaje={error} />;
    }

    // retornamos
    return Object.keys(tareas).map((user_id) => (
      <div key={user_id}>
        <h2>Usuarios {user_id}</h2>
        <div className="contenedor_tareas">{this.ponerTareas(user_id)}</div>
      </div>
    ));
  };

  ponerTareas = (user_id) => {
    const { tareas } = this.props;
    // solo pones las tareas solo por usuarios
    const porUsuarios = {
      ...tareas[user_id],
    };

    return Object.keys(porUsuarios).map((tar_id) => (
      <div key={tar_id} >
        <input type="checkbox" defaultChecked={porUsuarios[tar_id].completed} />
        {porUsuarios[tar_id].title}
      </div>
    ));
  };

  render() {
    console.log(this.props);
    return <div>{this.mostrarContenido()}</div>;
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Tareas);
