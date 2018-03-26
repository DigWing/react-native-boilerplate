import { normalize } from 'normalizr';
import endpoints from 'api/endpoints';
import Immutable from 'immutable';
import { reddit } from 'schemas';

export default ({ _reddit }) => ({
  url: endpoints.getRedditUrl(_reddit),
  transform: response => normalize(response.data.children, reddit.arrayOfPostSchemas).entities,
  options: {
    headers: {
      Accept: 'application/json',
    },
  },
  update: {
    posts: (prevPosts = Immutable.Map(), posts) => prevPosts.mergeDeep(posts),
  },
});
