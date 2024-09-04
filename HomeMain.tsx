import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeMain2 from './HomeMain2';

export default function HomeMain() {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const navigation = useNavigation();

  const searchTrainsBetweenStations = async () => {
    try {
      const url = `https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${fromStation}&toStationCode=${toStation}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f3b2668276msh0777c2610dca6ddp11c3eajsn63b01db1c5fe',
          'x-rapidapi-host': 'irctc1.p.rapidapi.com',
        },
      });
      const results = await response.json();
      navigation.navigate('TrainResultsScreen', { data: results.data });
    } catch (error) {
      console.error('Error fetching trains between stations:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="From Station Code"
        placeholderTextColor={'black'}
        onChangeText={setFromStation}
        value={fromStation}
      />
      <TextInput
        style={styles.input}
        placeholder="To Station Code"
        placeholderTextColor={'black'}
        onChangeText={setToStation}
        value={toStation}
      />
      <View style={styles.buttonContainer}>
        <Button title="Search Trains" color={'#312e6c'} onPress={searchTrainsBetweenStations} />
      </View>
      <HomeMain2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center', // Centers the button horizontally
    marginBottom: 10,
  },
  butto_o: {
    width: 180,
  },
});

