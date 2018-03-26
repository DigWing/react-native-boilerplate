import { isRSAA, CALL_API } from 'redux-api-middleware';
import { token } from 'helpers';

/**
 * Add Authorization header to api action
 *
 * @return {void}
 */
export default () => next => (action) => {
  if (!isRSAA(action) || !action[CALL_API].authToken) {
    return next(action);
  }

  const callAPI = action[CALL_API];
  const { headers } = callAPI;

  // Remove 'authToken' to pass validation
  delete callAPI.authToken;

  return token.getToken()
    .then((T) => {
      if (T) {
        callAPI.headers = {
          ...headers,
          Authorization: `Bearer ${T}`,
        };
      }

      return next(action);
    })
    .catch((err) => {
      console.error(err);
      return next(action);
    });
};
