import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from '../icon';

class ControlBar extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Control
          icon={Icon.Name.HEART}
          count={this.props.likes}
          onPress={this.props.onLikedPressed}
        />
        <Control
          icon={Icon.Name.COMMENT_STROKED}
          count={this.props.comments}
          onPress={this.props.onCommentPressed}
        />
        <Control
          icon={Icon.Name.REVINE_STROKED}
          count={this.props.revines}
          onPress={this.props.onRevinePressed}
        />
      </View>
    );
  }
}

function Control ({icon, count, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.control}>
        <Icon
          name={icon}
          style={styles.icon}
        />
        <Text style={styles.count}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  control: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25
  },
  icon: {
    fontSize: 18,
    color: 'gray'
  },
  count: {
    fontSize: 10,
    marginLeft: 10,
    color: 'gray'
  }
});

export default ControlBar;
