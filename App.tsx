/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          color: 'white',
        }}>
        Hola Mundo
      </Text>
    </View>
  );
};

export default App;
