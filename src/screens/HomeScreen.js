import React from 'react';
import {TouchableOpacity, StyleSheet, View, Button, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.projectsTextStyle}>Projects</Text>
      <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Counter')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Counter Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Intern')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Internship</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Carousel')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Carousel List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Project4')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Project 4</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Project5')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Project 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Project6')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Project 6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Project7')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Project 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Project8')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Project 8</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    height: 100,
    flexDirection: 'row',
    marginBottom: 10,
  },
  viewOneStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  projectsTextStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 33,
    marginBottom: 20,
  },
  buttonStyle: {
    borderWidth: 0.9,
    borderColor: 'white',
    borderRadius: 17,
    height: 35,
    width: 140,
    backgroundColor: '#09182b',
    alignItems: 'center',
  },
  viewStyle: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#09182b',
  },
});

export default HomeScreen;
