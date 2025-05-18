export interface ICharacter {
  id: number;
  name: string;
  imagen: string;
  sexo: "Femenino" | "Masculino" | "Desconocido";
  edad: number;
  ocupacion: string;
  clan: string;
  debut: string;
  estado: string;
  naturalezaTipo: string;
  clasificacion: string;
  familia: string;
}

export interface IAPIDateBayo {
  characters: ICharacter[];
  currentPage: number;
  pageSize: number;
  total: number;
}