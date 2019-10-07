import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './screens/Home';
import EmojiScreen from './screens/Emoji';
import AboutScreen from './screens/About';
import FAQScreen from './screens/FAQ';
import TeamScreen from './screens/Team';

const defaultStackOptions = {
  headerTransparent: true,
  headerStyle: {borderBottomWidth: 0, height: 0},
};

const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    EmojiDetails: {
      screen: EmojiScreen,
      navigationOptions: {
        headerStyle: {height: 30},
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackOptions,
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    About: AboutScreen,
    FAQ: FAQScreen,
    Team: TeamScreen,
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    drawerWidth: 100,
  },
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
