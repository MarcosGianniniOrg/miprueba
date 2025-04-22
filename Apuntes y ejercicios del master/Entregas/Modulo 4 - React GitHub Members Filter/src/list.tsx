import React from "react";
import { Link } from "react-router-dom";
import { MemberCard } from "./MemberCard";
import { getMembers, MemberEntity } from "./api/members.api";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getMembers()
      .then((data) => {
        setMembers(data);
        setError(null);
      })
      .catch(() => {
        setError("❌ Error al cargar los miembros");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>Hello from List page</h2>

      {isLoading ? (
        <p>Cargando miembros...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className="list-user-list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Name</span>
          <ul className="member-list">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </ul>
        </div>
      )}

      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
