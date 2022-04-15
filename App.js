import React from 'react';
import {LogBox} from 'react-native';
import RootContainer from './src/RootContainer';
import {Provider} from 'react-redux';
import store from './src/state/store';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
