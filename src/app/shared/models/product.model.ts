import { Design } from 'src/app/shared/models/design.model';

export interface Product {
  category: string;
  description: string;
  design: Design[];
  full_name: string;
  info: object;
  name: string;
  orderIndex: number;
  photo_url: string[];
  _id: string;
}
