// const constants = require("../constants.js");

// const errorHandler = (e, req, res, next) => {
//     const sCode = res.statusCode ? res.statusCode : 500;
//     switch (sCode) {
//         case constants.VALIDATION_ERROR:
//             res.json({
//                 title: "Validation error",
//                 message: e.message,
//                 stackTrace: e.stackTrace
//             });
//             break;
//         case constants.UNAUTHORIZED:
//             res.json({
//                 title: "Unauthorized error",
//                 message: e.message,
//                 stackTrace: e.stackTrace
//             });
//             break;
//         case constants.FORBIDDEN:
//             res.json({
//                 title: "Forbidden error",
//                 message: e.message,
//                 stackTrace: e.stackTrace
//             });
//             break;
//         case constants.NOT_FOUND:
//             res.json({
//                 title: "Sever not found error",
//                 message: e.message,
//                 stackTrace: e.stackTrace
//             });
//             break;
//         case constants.SERVER_ERROR:
//             res.json({
//                 title: "Server error",
//                 message: e.message,
//                 stackTrace: e.stackTrace
//             });
//             break;
//         default:
//             console.log("No Error, All good !");
//             break;
//     }
// }

// module.exports = errorHandler;

const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No Error, All good !");
      break;
  }
};

module.exports = errorHandler;