import { compose } from 'recompose';
import endpoints from 'api/endpoints';
import { connectRequest, querySelectors } from 'redux-query-immutable';
import { connect } from 'react-redux';
import { reddit } from 'api';

import { getRedditPosts } from './selectors';

const RedditApiHOC = () => WrappedComponent => compose(
  connectRequest(({ selectedReddit = 'reactjs' }) => reddit.queries.getReddit({ _reddit: selectedReddit })),
  connect(state => ({
    redditPosts: getRedditPosts(state),
    redditIsFetching: querySelectors.isPending(
      state.get('queries'),
      { url: endpoints.getRedditUrl('reactjs') },
    ) || false,
    redditLastUpdated: querySelectors.lastUpdated(
      state.get('queries'),
      { url: endpoints.getRedditUrl('reactjs') },
    ),
  })),
)(WrappedComponent);

export default RedditApiHOC;
