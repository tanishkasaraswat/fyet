
export interface Exercise {
  id?: number;
  name: string;
  image: string;
  instructions?: string;
  precautions?: string;
  youtubeLink: string;
  duration?: number;
  category?: string;
  difficulty: string;
  bodyFocus?: string;
  days: number;
  ageGroup: string;
  painType?: string;
  subcategory?: string;
}

export interface AudioOption {
  id: string;
  name: string;
  url: string;
}

export type FilterOptions = {
  ageGroup: string[];
  days: number[];
  difficulty: string[];
}

export type ActiveFilters = {
  ageGroup: string | null;
  days: number | null;
  difficulty: string | null;
  painType?: string | null;
}
