/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import '../app'
import {
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import RootStack from './navigation/RootStack';

function App(): React.JSX.Element {
  return (  
    <NavigationContainer>   
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
        hidden={false}
        
      />
      <RootStack/>  
    </NavigationContainer>
  );
}

export default App;
