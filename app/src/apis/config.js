const devBaseURL = 'http://localhost:6060';
const proBaseURL = 'http://production.org';

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;