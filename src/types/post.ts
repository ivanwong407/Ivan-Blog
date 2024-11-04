import { Category } from "./categories";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  detail?: string;
  category: Category;
  date: string;
}
