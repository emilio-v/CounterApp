import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Fab onPress={() => setCounter(counter - 1)} text="-1" position="bl" />
      <Fab onPress={() => setCounter(counter + 1)} text="+1" position="br" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202020',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    top: -10,
  },
});

export default CounterScreen;
