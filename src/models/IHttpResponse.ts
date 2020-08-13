export interface IHttpResponse<T> {
  success: boolean;
  payload: T;
}