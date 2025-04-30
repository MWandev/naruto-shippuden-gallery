export interface ICharacter {
  id: number;
  name: string;
  images?: string[];
  personal: {
    sex: "Male" | "Female";
    age: {
      "Part II": string;
    },
    clan: string;
  }
}

export interface IAPIDateBayo {
  characters: ICharacter[];
  currentPage: number;
  pageSize: number;
  total: number;
}