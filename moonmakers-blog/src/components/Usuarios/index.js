import React, { Component, useEffect } from "react";

// para conectar nuestro componente, a nuestro reducer
import { connect } from "react-redux";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";

const Usuarios = (props) => {
  const getUsuarios = async () => {
    props.traerTodos();
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const ponerFilas = () =>
    props.usuarios.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

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
          {ponerFilas()}
          {/* {this.props.usuarios.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

// conectamos el estado a nuestro componente
const mapStateToProps = (reducers) => {
  return reducers.usuarios;
};

export default connect(mapStateToProps, usuariosAction)(Usuarios);

// import React, { Component } from "react";

// // para conectar nuestro componente, a nuestro reducer
// import { connect } from "react-redux";

// // importamos nuestros actions
// import * as usuariosAction from "../../actions/usuariosActions";

// class Usuarios extends Component {
//   componentDidMount() {
//     this.props.traerTodos();
//   }

//   render() {
//     return (
//       <div>
//         <table className="tabla">
//           <thead>
//             <tr>
//               <th>Nombre</th>
//               <th>Correo</th>
//               <th>Enlace</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.usuarios.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.website}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// // conectamos el estado a nuestro componente
// const mapStateToProps = (reducers) => {
//   return reducers.usuarios;
// };

// export default connect(mapStateToProps, usuariosAction)(Usuarios);
