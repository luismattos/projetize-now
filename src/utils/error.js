const customErrors = CustomErrors();
export default customErrors;

function CustomErrors() {
  function getNewError(error, code, msg) {
    return { error, code, msg };
  }

  function ValidationError(
    validationErrors = [],
    errorCode = 0,
    errorMsg = ""
  ) {
    return getNewError(validationErrors, errorCode, errorMsg);
  }

  return { ValidationError };
}
