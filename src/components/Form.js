import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './styles/Form.css';
import { useAuth } from '../AuthContext'; 
const Form = () => {
  const [id, setId] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastNameMaterno: "",
    lastNamePaterno: "",
  });
  const [error, setError] = useState(false);
  const history = useHistory();
  const { logout } = useAuth(); 

  const users = [
    { id: "123", firstName: "Juan", lastNameMaterno: "Pérez", lastNamePaterno: "Gómez" },
    { id: "456", firstName: "María", lastNameMaterno: "López", lastNamePaterno: "Sánchez" },
    { id: "789", firstName: "Carlos", lastNameMaterno: "Martínez", lastNamePaterno: "Ramírez" },
  ];

  const handleFetchUser = () => {
    const user = users.find((user) => user.id === id);
    
    if (user) {
      setUserData({
        firstName: user.firstName,
        lastNameMaterno: user.lastNameMaterno,
        lastNamePaterno: user.lastNamePaterno,
      });
      setError(false);
    } else {
      setUserData({
        firstName: "",
        lastNameMaterno: "",
        lastNamePaterno: "",
      });
      setError(true);
    }
  };

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <div className="container">
      <h2>Formulario</h2>
      <form>
        <div className="form-group">
          <label>ID Usuario:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" value={userData.firstName} disabled />
        </div>
        <div className="form-group">
          <label>Apellido Paterno:</label>
          <input type="text" value={userData.lastNamePaterno} disabled />
        </div>
        <div className="form-group">
          <label>Apellido Materno:</label>
          <input type="text" value={userData.lastNameMaterno} disabled />
        </div>
        <button type="button" onClick={handleFetchUser}>
          Fetch User
        </button>
        <button onClick={handleLogout} style={{backgroundColor: "red", marginLeft: 100}}>
        Cerrar Sesión
      </button>
      {error && <p style={{ color: "red" }}>Usuario no encontrado</p>}
      </form>
      
    </div>

  );
};

export default Form;
