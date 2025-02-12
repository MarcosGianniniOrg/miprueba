import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importo el componente principal
import "./styles.scss"; // Importo los estilos

// Esto es lo típico en React 18 para renderizar la app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Pinto en pantalla el componente App
root.render(<App />);
