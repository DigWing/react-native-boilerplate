import React from 'react';
import { compose } from 'recompose';
import { apiHOCs } from 'components';
import { View, ScrollView, Text } from 'react-native';

const BootScreen = ({ redditPosts }) =>
  <ScrollView>
    { redditPosts.map(post =>
      <View key={post.get('id')} style={{ marginTop: 50 }}>
        <Text>
          {post.get('title')}
        </Text>
      </View>).toArray()
    }
  </ScrollView>;

export default compose(
  apiHOCs.RedditApiHOC(),
)(BootScreen);
