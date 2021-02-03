import { Category } from 'src/app/shared/models/category.model';

export interface CategoryResponse {
  status: string;
  data: Category[];
}
