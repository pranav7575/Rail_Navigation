import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import More from './More';
import UserGuideScreen from './pages/UserGuideScreen';
import About from './pages/About';
import Contact from './pages/Contact';

const Stack = createNativeStackNavigator();

function MoreRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={More} options={{ headerShown: false }}/>
      <Stack.Screen name="Contact" component={Contact} options={{ headerShown: true }}/>
      <Stack.Screen name="About" component={About} options={{ headerShown: true }} />
      <Stack.Screen name="UserGuideScreen" component={UserGuideScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

export default MoreRoutes;
