import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import boom from '@hapi/boom';
import axios from 'axios';
import config from '../../../config';

passport.use(
  new BasicStrategy(async (email, password, cb) => {
    try {
      const { data, status } = await axios({
        url: `${config.API_URL}/api/auth/sign-in`,
        method: 'post',
        auth: {
          password,
          username: email,
        },
        data: {
          apiToken: config.API_KEY_TOKEN,
        },
      });

      if (!data || status !== 200) {
        cb(boom.unauthorized(), false);
      }

      return cb(null, data);

    } catch (err) {
      cb(err);
    }
  }),
);

