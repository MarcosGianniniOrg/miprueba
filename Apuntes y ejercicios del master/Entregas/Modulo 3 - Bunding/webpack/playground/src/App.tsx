import React from "react";
import logo from "./assets/logo.png"; // Importamos el logo
import "./styles.scss"; // Importamos los estilos

const App: React.FC = () => {
  // Compruebo si estamos en modo desarrollo
  const isDevelopment = process.env.NODE_ENV === "development";

  // Dependiendo del entorno, muestro un mensaje u otro
  const message = isDevelopment
    ? "¡Hola Mundo desde React con Webpack y TypeScript! 🚀"
    : "Proyecto base listo para usar 🚀";

  return (
    <div>
      <h1>{message}</h1>

      {/* Muestra el logo solo en desarrollo */}
      {isDevelopment && <img src={logo} alt="Logo" id="logo" />}
    </div>
  );
};

// Exporto el componente para que lo use `index.tsx`
export default App;
