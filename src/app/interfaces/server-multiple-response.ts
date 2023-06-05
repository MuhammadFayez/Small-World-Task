export interface ServerMultipleResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: any[];
  message: string;
}
