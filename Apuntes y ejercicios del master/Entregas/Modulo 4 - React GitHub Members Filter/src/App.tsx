import { useState, useEffect } from "react";

interface Member {
  id: number;
  login: string;
  avatar_url: string;
}

export const App = () => {
  const [name, setName] = useState("lemoncode");
  const [members, setMembers] = useState<Member[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState(name);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${search}/members`)
      .then((response) => response.json())
      .then((data: Member[] | { message: string }) => {
        if (Array.isArray(data)) {
          setMembers(data);
          setError(null);
        } else {
          setMembers([]);
          setError("❌ Organización no encontrada");
        }
      })
      .catch(() => {
        setMembers([]);
        setError("❌ Ha ocurrido un error al conectar con GitHub");
      });
  }, [search]);

  return (
    <>
      <div>
        <h2>Miembros de Github</h2>
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

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <ul className="member-list">
          {members.map((member) => (
            <li key={member.id} className="member-card">
              <img src={member.avatar_url} alt={member.login} />
              <span>{member.login}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
