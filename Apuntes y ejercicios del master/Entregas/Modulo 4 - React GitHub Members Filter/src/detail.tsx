import React from "react";
import { Link, useParams } from "react-router-dom";
import { getMemberById } from "./api/members.api";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  const [member, setMember] = React.useState({
    id: "",
    login: "",
    avatar_url: "",
  });

  React.useEffect(() => {
    if (id) {
      getMemberById(id).then(setMember);
    }
  }, [id]);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <img
        src={member.avatar_url}
        alt={member.login}
        style={{ width: "150px", borderRadius: "8px", marginBottom: "1rem" }}
      />
      <h3>ID: {member.id}</h3>
      <h3>Login: {member.login}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
