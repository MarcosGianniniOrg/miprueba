// Importamos los hooks necesarios desde React
import { useState, useEffect } from "react";

// Creamos una interfaz para definir la forma que tendrán los datos de los miembros
interface Member {
  id: number;
  login: string;
  avatar_url: string;
}

// Componente principal de la App
export const App = () => {
  // Estado para almacenar el texto que el usuario escribe en el input
  const [name, setName] = useState("lemoncode");

  // Estado donde se guardan los miembros que devuelve la API
  const [members, setMembers] = useState<Member[]>([]);

  // Estado para mostrar errores si la API falla o no encuentra la organización
  const [error, setError] = useState<string | null>(null);

  // Estado que se usa para lanzar la búsqueda real (separado del input)
  const [search, setSearch] = useState(name);

  // Estado para la paginación
  const [page, setPage] = useState(1);

  // Constante que define cuántos miembros se muestran por página
  const MEMBERS_PER_PAGE = 2;

  // Efecto secundario: cada vez que cambia la organización, volvemos a la página 1
  useEffect(() => {
    setPage(1);
  }, [search]);

  // Efecto secundario: se lanza la petición a la API cada vez que cambie `search` o `page`
  useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${search}/members?per_page=${MEMBERS_PER_PAGE}&page=${page}`
    )
      .then((response) => response.json())
      .then((data: Member[] | { message: string }) => {
        // Si la API devuelve un array (correcto), guardamos los datos
        if (Array.isArray(data)) {
          setMembers(data);
          setError(null);
        } else {
          // Si devuelve un error (objeto con message), lo mostramos
          setMembers([]);
          setError("❌ Organización no encontrada");
        }
      })
      .catch(() => {
        // Si hay un error de red o similar
        setMembers([]);
        setError("❌ Ha ocurrido un error al conectar con GitHub");
      });
  }, [search, page]);

  // Función que se llama al pasar a la siguiente página (solo si hay datos suficientes)
  const goToNextPage = () => {
    if (members.length === MEMBERS_PER_PAGE) {
      setPage(page + 1);
    }
  };

  // Renderizado del componente
  return (
    <>
      <div>
        <h2>Miembros de Github</h2>

        {/* Input para escribir el nombre de la organización + botón de búsqueda */}
        <div className="search-bar">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Introduce una organización"
          />
          <button onClick={() => setSearch(name)} className="search-button">
            Buscar
          </button>
        </div>

        {/* Si hay error, lo mostramos en rojo */}
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        {/* Lista de miembros */}
        <ul className="member-list">
          {members.map((member) => (
            <li key={member.id} className="member-card">
              <img src={member.avatar_url} alt={member.login} />
              <span>{member.login}</span>
            </li>
          ))}
        </ul>

        {/* Controles de paginación */}
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Página anterior
          </button>
          <p>
            <strong>Página {page}</strong>
          </p>
          <button
            onClick={goToNextPage}
            disabled={members.length < MEMBERS_PER_PAGE}
          >
            Página siguiente
          </button>
        </div>
      </div>
    </>
  );
};
