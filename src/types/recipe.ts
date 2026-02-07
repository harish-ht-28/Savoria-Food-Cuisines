export interface NutritionInfo {
  calories: number;
  carbohydrateContent: string;
  cholesterolContent: string;
  fiberContent: string;
  proteinContent: string;
  saturatedFatContent: string;
  sodiumContent: string;
  sugarContent: string;
  fatContent: string;
}

export interface Recipe {
  id: string;
  title: string;
  cuisine: string;
  rating: number;
  totalTime: string;
  totalTimeMinutes: number;
  cookTime: string;
  prepTime: string;
  serves: number;
  description: string;
  nutrition: NutritionInfo;
  ingredients?: string[];
  instructions?: string[];
  url?: string;
  continent?: string;
  country?: string;
}

export interface CuisineInfo {
  name: string;
  description: string;
  flag: string;
}
