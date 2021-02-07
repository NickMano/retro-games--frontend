import dotenv from 'dotenv';

dotenv.config();
const { ENV, PORT, API_URL, API_KEY_TOKEN } = process.env;
const DEV = ENV !== 'production';

export default {
  DEV,
  ENV,
  PORT,
  API_URL,
  API_KEY_TOKEN,
};
