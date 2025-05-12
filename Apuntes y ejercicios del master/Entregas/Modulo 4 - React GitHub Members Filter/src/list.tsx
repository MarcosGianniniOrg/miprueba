import React from "react";
import { Link } from "react-router-dom";
import { MemberCard } from "./MemberCard";
import { getMembers, MemberEntity } from "./api/members.api";
import "./styles.css";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [org, setOrg] = React.useState("lemoncode");
  const [search, setSearch] = React.useState("lemoncode");
  const [currentPage, setCurrentPage] = React.useState(1);
  const membersPerPage = 4;

  // Comentario para el profesor:
  // Llamada a la API para obtener los miembros cada vez que cambia el nombre de la organización.
  React.useEffect(() => {
    getMembers(search).then((data) => {
      setMembers(data);
      setCurrentPage(1); // Reinicia a la página 1 cuando se realiza una búsqueda nueva
    });
  }, [search]);

  // Calculamos el índice para mostrar solo los miembros correspondientes a la página actual.
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(org);
  };

  return (
    <div className="container">
      <h2>Hello from List page</h2>

      {/* Buscador de organización GitHub */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          placeholder="Buscar organización"
        />
        <button type="submit">Buscar</button>
      </form>

      {/* Lista de miembros */}
      <ul className="member-list">
        {currentMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </ul>

      {/* Paginación */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {Math.ceil(members.length / membersPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(members.length / membersPerPage)
                ? prev + 1
                : prev
            )
          }
          disabled={indexOfLastMember >= members.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
