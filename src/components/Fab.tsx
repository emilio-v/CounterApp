import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface FabProps {
  text: string;
  position: 'bl' | 'br';
  onPress: () => void;
}

const Fab = ({onPress, text, position = 'br'}: FabProps) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'br' ? styles.fabLocationRight : styles.fabLocationLeft,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'br' ? styles.fabLocationRight : styles.fabLocationLeft,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

export default Fab;

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 70,
  },
  fabLocationLeft: {
    left: 30,
  },
  fabLocationRight: {
    right: 30,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  fabText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
