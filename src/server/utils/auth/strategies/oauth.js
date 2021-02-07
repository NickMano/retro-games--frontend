import passport from 'passport';
import axios from 'axios';
import boom from '@hapi/boom';
import config from '../../../config';

const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google-oauth/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      const { data, status } = await axios({
        url: `${config.API_URL}/api/auth/sign-provider`,
        method: 'post',
        data: {
          name: profile._json.name,
          email: profile._json.email,
          password: profile.id,
          apiKeyToken: config.API_KEY_TOKEN,
        },
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    },
  ),
);
