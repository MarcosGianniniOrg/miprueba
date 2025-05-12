export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

// Obtener todos los miembros de una organización
export const getMembers = async (org: string): Promise<MemberEntity[]> => {
  try {
    const response = await fetch(`https://api.github.com/orgs/${org}/members`);

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

// Obtener un solo miembro por login (detalle)
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
