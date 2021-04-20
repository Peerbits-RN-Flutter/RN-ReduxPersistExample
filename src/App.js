import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppNavigator from './navigation/Routes'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import React, { Component } from 'react';
import { View } from 'react-native';
import { Root } from 'native-base'
import { AlertDialog } from './components/common';
import { lightTheme, darkTheme } from './utils/Themes'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk),
);

export const pStore = persistStore(store)
export { store };
export default class App extends Component {

  componentDidMount() {

   // EStyleSheet.build(lightTheme)
    
  }
  render() {

    return (
      <Provider store={store}>
         <PersistGate persistor={pStore}>
        <Root>
          <AlertDialog onRef={c => {
            if (c)
              AlertDialog.dialogInstance = c;
          }} />
          <AppNavigator />
        </Root>
        </PersistGate>
      </Provider>
      
    );
  }
};