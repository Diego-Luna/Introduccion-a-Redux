import React from "react";

const App = () => {
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
          <tr>
            <td>Diego</td>
            <td>diego@gmail.com</td>
            <td>moonmakers.com</td>
          </tr>
          <tr>
            <td>Diego</td>
            <td>diego@gmail.com</td>
            <td>moonmakers.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
