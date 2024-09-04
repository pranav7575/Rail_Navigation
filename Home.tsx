// In App.js in a new project

import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from './HomeMain';
import HomeMain2 from './HomeMain2';
import TrainResultsScreen from './pages/TrainResultsScreen';
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen
        name="HomeMain"
        component={HomeMain}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="TrainResultsScreen"
        component={TrainResultsScreen}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen name="demo" component={HomeMain}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default Home;
