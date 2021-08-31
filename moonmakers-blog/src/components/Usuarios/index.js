import React, { Component } from "react";
import axios from "axios";

class Usuarios extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  async componentDidMount() {
    const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log("respuesta ", respuesta.data);

    this.setState({
      usuarios: respuesta.data
    });
  }

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
            {this.state.usuarios.map((item) => (
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

export default Usuarios;
