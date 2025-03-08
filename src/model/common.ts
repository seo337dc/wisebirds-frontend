export type PaginatedResponse<T> = {
  content: T[];
  total_elements: number;
  total_pages: number;
  last: boolean;
  number: number;
  size: number;
  sort: object;
  number_of_elements: number;
  first: boolean;
  empty: boolean;
};
