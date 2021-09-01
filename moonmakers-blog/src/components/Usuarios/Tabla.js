import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Tabla = (props) => {
  const ponerFilas = () =>
    props.usuarios.map((usuario, key) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
        <td>

          <Link to={`/publicaciones/${key}`} >
            <div className="eye-solid icon"></div>
          </Link>
        </td>
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
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, {})(Tabla);
