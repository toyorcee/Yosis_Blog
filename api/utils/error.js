export const errorHandler = (statusCode, message) => {
  const error = new Error(); // Create a new Error object
  error.statusCode = statusCode; // Set the status code
  error.message = message; // Set the message
  return error; // Return the error object
};
