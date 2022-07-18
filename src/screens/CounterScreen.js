import React, {useReducer} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'reset':
      return {...state, count: 0};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, callMyReducer] = useReducer(reducer, {count: 0});

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          callMyReducer({type: 'increment', payload: 1});
        }}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          callMyReducer({type: 'reset'});
        }}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Reset</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={{fontWeight: 'bold'}}>Current Count:{state.count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 0.9,
    borderColor: 'white',
    borderRadius: 17,
    height: 35,
    width: '100%',
    backgroundColor: '#09182b',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  countContainer: {
    alignItems: 'center',
    padding: 20,
  },
});

export default CounterScreen;
