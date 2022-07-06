import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';

const InternScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <View>
      <View>
        <Text style={styles.textStyle}>Your Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={newName => setName(newName)}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Your Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={newLastName => setLastName(newLastName)}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Internship Start Date</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.textStyle}>Internship End Date</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>Create Text</Text>
      </TouchableOpacity>
      <Text>My name is {name}</Text>
      <Text>My last name is {lastName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  input: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  button: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 50,
  },
});

export default InternScreen;
