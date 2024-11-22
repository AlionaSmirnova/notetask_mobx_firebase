
// AppRegistry.registerComponent(appName, () => App);

import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import * as React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
// import store from './src/store';
import { name as appName } from './app.json';
import App from './src/assets/components/App';


export default function Main() {
  return (
    // <Provider store={store}>
    <PaperProvider theme={DefaultTheme}>
      <App />
 </PaperProvider>
    // </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);