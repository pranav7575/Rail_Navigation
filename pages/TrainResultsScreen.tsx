import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Updated interface to match the JSON structure
interface TrainBetweenStations {
  train_name: string;
  train_number: string;
  from_station_name: string;
  to_station_name: string;
  from_std: string;
  to_sta:string;
  arrival_time: string;
  run_days: string[];
}

type RootStackParamList = {
  Home: undefined;
  TrainResult: { data: TrainBetweenStations[] };
};

type TrainResultsScreenProps = NativeStackScreenProps<RootStackParamList, 'TrainResult'>;

const formatRunDays = (days: string[]): string => {
  const dayMap: Record<string, string> = {
    Mon: 'M',
    Tue: 'T',
    Wed: 'W',
    Thu: 'Th',
    Fri: 'F',
    Sat: 'Sa',
    Sun: 'Su',
  };
  return days.map(day => dayMap[day] || day).join(',');
};

export default function TrainResultsScreen({ route }: TrainResultsScreenProps) {
  // Ensure that data is correctly parsed if it's a JSON string
  const { data } = route.params;

  // Debugging: Check the data type and structure
  console.log('Train data:', data);

  if (!Array.isArray(data)) {
    console.error('Expected data to be an array');
    return <Text style={styles.text}>Error: Data format is incorrect</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {data.length > 0 ? (
        data.map((item, index) => (
          <View key={index} style={styles.resultItem}>
            <Text style={styles.trainName}>{item.train_name}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.stationText}>
                {item.from_station_name} - {item.to_station_name}
              </Text>
              <Text style={styles.trainNumber}>{item.train_number}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.departTime}>{item.from_std} - {item.to_sta}</Text>
              <Text style={styles.runDays}>{formatRunDays(item.run_days)}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.text}>No Results Found</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  resultItem: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#4682B4',
    borderRadius: 5,
    backgroundColor: '#B0E0E6',
  },
  trainName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  stationText: {
    fontSize: 16,
    color: '#000',
  },
  trainNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  departTime: {
    fontSize: 16,
    color: '#000',
  },
  runDays: {
    fontSize: 16,
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});
