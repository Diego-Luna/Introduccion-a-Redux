import React from "react";

const App = () => {
  let users = [
    {
      id: 1,
      name: "Diego",
      email: "diego@gmail.com",
      domain: "moonmakers.com",
    },
    {
      id: 1,
      name: "Diego",
      email: "diego@gmail.com",
      domain: "moonmakers.com",
    },
  ];

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
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
