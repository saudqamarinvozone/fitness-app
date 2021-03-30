const errorCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const exerciseErrors = {
  NOT_FOUND: 'Exercise not found',
  ALREADY_EXIST: 'Exercise already exist',
};
const userErrors = {
  NOT_FOUND: 'Exercise not found',
  ALREADY_EXIST: 'Exercise already exist',
};
module.exports = {
  errorCodes,
  exerciseErrors,
  userErrors,
};
