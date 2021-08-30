import React, { Component } from "react";
import axios from "axios";

// const App = () => {
class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  async componentDidMount() {
    const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(respuesta);

    this.setState({
      usuarios: [
        {
          id: 1,
          name: "Diego",
          email: "diego@gmail.com",
          web: "moonmakers.com",
        },
        {
          id: 2,
          name: "Diego Francisco",
          email: "diegofco@gmail.com",
          web: "moonmakers.com",
        },
      ],
    });
  }

  render() {
    console.log(this.state.usuarios);

    return (
      <div className="margen">
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
                <td>{item.web}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
