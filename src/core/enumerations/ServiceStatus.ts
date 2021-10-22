export enum ServiceStatus {
  Ok = 200,
  FailedValidation = 400,
  Forbidden = 403,
  InternalError = 500,
  Unauthorized = 401,
  UnprocessableEntity = 422,
}
