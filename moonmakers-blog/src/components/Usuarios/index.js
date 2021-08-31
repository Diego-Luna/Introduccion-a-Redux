import React, { Component } from "react";
import axios from "axios";

// para conectar nuestro componente, a nuestro reducer
import { connect } from "react-redux";

class Usuarios extends Component {


  // async componentDidMount() {
  //   const respuesta = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );

  //   console.log("respuesta ", respuesta.data);

  //   this.setState({
  //     usuarios: respuesta.data,
  //   });
  // }

  render() {

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

export default connect(mapStateToProps, {
  /* actions*/
})(Usuarios);
