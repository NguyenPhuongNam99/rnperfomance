import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import Data from './src/App';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View>
        <Data />
      </View>
    </Provider>
  );
}

export default App;
