/**
 * @format
 */
import 'react-native-gesture-handler'; //fix for https://github.com/kmagiera/react-native-gesture-handler/pull/657
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
