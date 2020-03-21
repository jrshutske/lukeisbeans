const success = (logMessage) => {
  console.info("\x1b[32m", logMessage, "\x1b[0m");
}

const info = (logMessage) => {
  console.info("\x1b[36m", logMessage, "\x1b[0m");
}

const warning = (logMessage) => {
  console.info("\x1b[33m", logMessage, "\x1b[0m");
}

const error = (logMessage) => {
  console.info("\x1b[41m", logMessage, "\x1b[0m");
}

module.exports = {
  success: success,
  info: info,
  warning: warning,
  error: error
}