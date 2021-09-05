import React, { useEffect } from "react";

import Spinner from "../General/Spinner";
import Error from "../General/Error";
import Tabla from "./Tabla";

// para conectar nuestro componente, a nuestro reducer
import { connect } from "react-redux";

// importamos nuestros actions
import * as usuariosAction from "../../actions/usuariosActions";

const Usuarios = (props) => {
  const getUsuarios = async () => {
    console.log("en el getUsuarios");

    if (!props.usuarios.length) {
      props.traerTodos();
      console.log("en el traerTodos");
    }
  };

  useEffect(() => {
    getUsuarios();
    console.log("en el useEffect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ponerContenido = () => {
    if (props.cargando) {
      return <Spinner />;
    }

    if (props.error) {
      return <Error mensaje={props.error} />;
    }

    return <Tabla />;
  };

  return (
    <div>
      <h1>Usuarios</h1>
      {ponerContenido()}
    </div>
  );
};

// conectamos el estado a nuestro componente
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
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
