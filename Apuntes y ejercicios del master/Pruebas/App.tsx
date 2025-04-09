import { useState, useEffect } from "react";

export const App = () => {
const [clics, setClics] = useState(0);

useEffect(() => {
    console.log("Componente montado");
}, []);

return (

<>
    <p>Has hecho {clics} clics</p>
    <button onClick={() => setClics(clics + 1)}>Clic aquí</button>
</>

);

}
