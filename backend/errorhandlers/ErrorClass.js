export default class CustomError extends Error {
  constructor(statuscode, message) {
    super(message); 
    this.statuscode = statuscode; 
    this.message = message; 

    Error.captureStackTrace(this, this.constructor); 
  }
}
