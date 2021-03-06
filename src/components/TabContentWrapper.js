import React, { Component } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles';

// https://github.com/react-native-community/react-native-tab-view/issues/147
class TabContentWrapper extends Component {
  constructor(props) {
    super(props);
    const { active } = props;
    this.state = { loaded: active };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active && !this.state.loaded) {
      this.setState({ loaded: true });
    }
  }

  render() {
    const { active, children } = this.props;
    return active || this.state.loaded
      ? <View style={globalStyles.container}>
          {children}
        </View>
      : null;
  }
}

export default TabContentWrapper;
