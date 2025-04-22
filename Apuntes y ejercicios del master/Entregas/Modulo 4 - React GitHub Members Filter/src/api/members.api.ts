// Tipado centralizado para los miembros
export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

// Obtener lista de miembros de la organización
export const getMembers = async (): Promise<MemberEntity[]> => {
  try {
    const response = await fetch("https://api.github.com/orgs/lemoncode/members");
    if (!response.ok) {
      throw new Error("Error al cargar los miembros");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Obtener detalle de un miembro por login
export const getMemberById = async (login: string): Promise<MemberEntity> => {
  try {
    const response = await fetch(`https://api.github.com/users/${login}`);
    if (!response.ok) {
      throw new Error("Error al cargar el miembro");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
