import { createSelector } from 'reselect';
import { getEntities } from 'reducers';
import { reddit as redditApi } from 'api';
import { denormalize } from 'normalizr';
import { reddit as redditSchemas } from 'schemas';

export const getRedditPosts = createSelector(
  state => redditApi.selectors.getPosts(state),
  state => getEntities(state),
  (result, entities) =>
    denormalize(
      result,
      redditSchemas.arrayOfPostSchemas,
      entities,
    ),
);
