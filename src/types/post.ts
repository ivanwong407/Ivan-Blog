import { Category } from './categories';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: Category;
  date: string;
}