export const globalErrorHandler = (err, req, res, next) => {
  const status = err.statuscode || 500;

  let message = err.message || "Internal Server Error";

  if (status === 404) {
    message = message || "Resource not found";
  } else if (status === 401) {
    message = message || "Unauthorized";
  } else if (status === 400) {
    message = message || "Bad Request";
  }

  res.status(status).json({
    success: false,
    error: message,
    status: status,
  });
};
