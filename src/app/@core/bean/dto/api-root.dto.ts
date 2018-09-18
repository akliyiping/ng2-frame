export interface ApiRootDto<T> {
  status: number;
  data: T;
  message?: any;
}
