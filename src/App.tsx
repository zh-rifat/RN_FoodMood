/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import '../app'
import {
  StatusBar, Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import { Provider } from 'react-redux';

import RootStack from './navigation/RootStack';
import { store } from './utils/redux/store';
import { colors } from './utils/theme';

function App(): React.JSX.Element {
  return (  
    <Provider store={store}>
      <NavigationContainer>   
        <StatusBar
          backgroundColor={colors.theme}
          translucent
          barStyle={'dark-content'}
          hidden={false}
          animated
        />
        <RootStack/>  
      </NavigationContainer>
    </Provider>
  );
}

export default App;
