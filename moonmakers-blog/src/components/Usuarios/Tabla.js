import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Tabla = (props) => {


  const ponerFilas = () => {

    if(props.usuarios.length){
      return (props.usuarios.map((usuario, key) => (
        <tr key={usuario.id}>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{usuario.website}</td>
          <td>
            <Link to={`/publicaciones/${key}`}>
              <div className="eye-solid icon"></div>
            </Link>
          </td>
        </tr>
      )))
    }
    else{
      return <h1> Cargando </h1>
    }
  };

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>{ponerFilas()}</tbody>
    </table>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Tabla);
