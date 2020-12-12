/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TicketCardStack from './src/components/TicketCardStack';


const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <TicketCardStack />
      </NavigationContainer>
  );
};

export default App;
