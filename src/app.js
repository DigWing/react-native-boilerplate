import React from 'react';
import { BootScreen } from 'screens';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const App = () =>
  <Provider store={store}>
    <BootScreen />
  </Provider>;

export default App;
