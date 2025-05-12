import React from "react";
import { Link } from "react-router-dom";

interface Props {
  member: {
    id: string;
    login: string;
    avatar_url: string;
  };
}

export const MemberCard: React.FC<Props> = ({ member }) => {
  return (
    <li className="member-card">
        <img src={member.avatar_url} alt={member.login} />
        <span>{member.id}</span>
        <Link to={`/detail/${member.login}`}>{member.login}</Link>
    </li>
  );
};
