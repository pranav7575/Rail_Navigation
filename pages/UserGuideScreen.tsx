// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './About';
import Contact from './Contact';
import More from '../More';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function UserGuideScreen() {
  return (
    
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Guide</Text>
    <FontAwesome5 name='comments'></FontAwesome5>

    </View>
  );
}

export default UserGuideScreen;
