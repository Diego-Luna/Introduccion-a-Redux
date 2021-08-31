import React, { Component } from "react";
import axios from "axios";

// para conectar nuestro componente, a nuestro reducer
import { connect } from "react-redux";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";

class Usuarios extends Component {
  componentDidMount() {
    // const respuesta = await axios.get(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // console.log("respuesta ", respuesta.data);
    // this.setState({
    //   usuarios: respuesta.data,
    // });

    this.props.traerTodos();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {this.props.usuarios.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// conectamos el estado a nuestro componente
const mapStateToProps = (reducers) => {
  return reducers.usuarios;
};

export default connect(mapStateToProps, usuariosAction)(Usuarios);
