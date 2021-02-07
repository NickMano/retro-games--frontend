import dotenv from 'dotenv';

dotenv.config();
const {
  ENV,
  PORT,
  API_URL,
  API_KEY_TOKEN,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;
const DEV = ENV !== 'production';

export default {
  DEV,
  ENV,
  PORT,
  API_URL,
  API_KEY_TOKEN,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
};
