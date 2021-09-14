import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      {/* <Button title="Click" onPress={() => setCounter(counter + 1)} /> */}
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
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
  fabLocationBR: {
    position: 'absolute',
    right: 30,
    bottom: 70,
  },
  fabLocationBL: {
    position: 'absolute',
    left: 30,
    bottom: 70,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CounterScreen;
