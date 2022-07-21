/* eslint-disable no-console */
const logConfig = {
  error: true,
  warn: true,
  info: true,
  log: true,
};

const formatMessage = (val, trace) => {
  return `${JSON.stringify(val)} ${trace ? JSON.stringify(trace) : ''}`;
};

const logger = {
  error: (val, trace) => logConfig?.error && console.error(`[DOC] ${formatMessage(val)}`, trace),
  warn: (val, trace) => logConfig?.warn && console.warn(`[DOC] ${formatMessage(val, trace)}`),
  info: (val, trace) => logConfig?.info && console.info(`[DOC] ${formatMessage(val, trace)}`),
};

export default logger;
