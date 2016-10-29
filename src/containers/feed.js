import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import videoSelector from '../selectors/videos';
import Screen from '../components/screen';
import Video from 'react-native-video';
import VideoPost from '../components/videoPost';

class Feed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      repeat: true,
      muted: false,
      paused: true,
      controls: false,
      skin: 'custom'
    };
  }
  render () {
    return (
      <Screen>
        <ScrollView>
          {this.props.videos.map(video => (
            <VideoPost
              key={video.postId}
              video={video}
            />
          ))}
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    height: 100,
    width: 100
  }
});

const selector = createStructuredSelector({
  videos: videoSelector
});

export default connect(selector)(Feed);
