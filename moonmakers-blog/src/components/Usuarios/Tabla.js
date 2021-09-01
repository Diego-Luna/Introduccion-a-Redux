import { connect } from "react-redux";

const Tabla = (props) => {
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

export default connect(mapStateToProps, {})(Tabla);
