import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardFlow} from 'react-native-onboard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Map from './pages/Map';
import Home from './Home';
import More from './More';
import MoreRoutes from './MoreRoutes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Home2() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#312e6c',
          height: 50,
        },
        tabBarLabel: () => null,
        tabBarLabelStyle: {
          
        },
        headerStyle: {
          backgroundColor: '#312e6c',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
          fontSize: 18,
          fontWeight: '600',
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={30} color="#ffffff" />
          ),
          headerTitle: 'Welcome To IRCTC',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '600',
            color: '#ffffff',
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          title: '',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="map-marked-alt" size={31} color="#ffffff" />
          ),
        
        }}
      />
      <Tab.Screen
        name="MoreRoutes"
        component={MoreRoutes}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="ellipsis-h" size={24} color="#ffffff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Onboarding({navigation}) {
  return (
    <OnboardFlow
      pages={[
        {
          title: 'Welcome to my app',
          // subtitle: 'This is page 1',
          imageUri: Image.resolveAssetSource(
            require('./assets/images/irtcc1.png'),
          ).uri,
        },
        {
          title: 'तुमचे स्वागत आहे',
          imageUri: Image.resolveAssetSource(
            require('./assets/images/irtcc1.png'),
          ).uri,
        },
      ]}
      type={'bottom-sheet'}
      onDone={() => navigation.replace('Home2')} // Navigate to Home2 after onboarding
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}} // Hide header for onboarding
        />
        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{headerShown: false}} // Hide header for the main tab navigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
