import { URLz } from "../enums/url.enum";

export interface HttpServiceParam {
  query?: any;
  endpoint?: URLz | string;
  url?: string | any;
}
