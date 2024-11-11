export interface ApiPagination<T> {
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  orderDirection?: "asc" | "desc";
  includeAll?: boolean;
  parameter?: string;
  items?: T[];
  totalItems?: number;
}
