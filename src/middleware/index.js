import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();
const middleware = [thunk, logger];

export default middleware;