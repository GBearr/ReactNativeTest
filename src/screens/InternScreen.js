import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

const InternScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sentence, setSentence] = useState('');
  const [startDate, setStarDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onPressButton = () => {
    let start = moment(startDate, 'MM-DD-YYYY');
    let end = moment(endDate, 'MM-DD-YYYY');
    const diffInDays = end.diff(start, 'days');
    setSentence(
      `My name is ${name} and my surname is ${lastName} ${diffInDays} days left on my internship`,
    );

    console.log(diffInDays);
  };

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
        <TextInput
          style={styles.input}
          value={startDate}
          onChangeText={newStartDate => setStarDate(newStartDate)}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Internship End Date</Text>
        <TextInput
          style={styles.input}
          value={endDate}
          onChangeText={newEndDate => setEndDate(newEndDate)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPressButton}
        onFocus={''}>
        <Text>Create Text</Text>
      </TouchableOpacity>
      <Text>{sentence}</Text>
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
