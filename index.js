/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './Home';
import Home2 from './Home2';
import UserGuideScreen from './pages/UserGuideScreen.tsx'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home2);
