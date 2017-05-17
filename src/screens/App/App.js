import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { connect, Provider } from 'react-redux';
import Master from './Master';
import { LocalizationProvider } from '../../components/Localization';
import i18n from '../../common/helpers/i18n';

console.ignoredYellowBox = ['Warning: BackAndroid'];

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-line no-undef
  [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeStamp',
    'trace',
    'warn',
  ].forEach(methodName => {
    console[methodName] = () => {
      /* noop */
    };
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'ios') {
      // StatusBar.setBarStyle('light-content', true)
      StatusBar.setBarStyle('default');
    }
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <LocalizationProvider i18n={i18n}>
          <Master />
        </LocalizationProvider>
      </Provider>
    );
  }
}

export default connect()(App);
