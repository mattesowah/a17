/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Node from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/home';

const App: () => Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
       <HomeScreen />
    </SafeAreaView>
    </>
  );
};
  


export default App;

