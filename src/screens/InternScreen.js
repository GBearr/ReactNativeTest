import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

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
  };

  return (
    <View>
      <View>
        <View>
          <Text style={styles.textStyle}>Your Name</Text>
          <TextInput
            style={styles.inputStyle}
            value={name}
            onChangeText={newName => setName(newName)}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Your Last Name</Text>
          <TextInput
            style={styles.inputStyle}
            value={lastName}
            onChangeText={newLastName => setLastName(newLastName)}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Internship Start Date</Text>
          <TextInput
            style={styles.inputStyle}
            value={startDate}
            onChangeText={newStartDate => setStarDate(newStartDate)}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Internship End Date</Text>
          <TextInput
            style={styles.inputStyle}
            value={endDate}
            onChangeText={newEndDate => setEndDate(newEndDate)}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={onPressButton}
          onFocus={''}>
          <Text style={styles.buttonTextStyle}>Create Text</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{sentence}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'gray',
  },
  inputStyle: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  buttonStyle: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 50,
    borderColor: 'gray',
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});

export default InternScreen;
