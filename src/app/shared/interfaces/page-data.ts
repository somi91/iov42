import { Cinema } from "./cinema"

export interface PageData<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number
}

interface Pageable {
  sort: Sort, 
  offset: number, 
  pageNumber: number, 
  pageSize: number,
  paged: boolean,
  unpaged: boolean
}
interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}