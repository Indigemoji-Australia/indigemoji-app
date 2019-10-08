import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './screens/Home';
import EmojiScreen from './screens/Emoji';
import AboutScreen from './screens/About';
import FAQScreen from './screens/FAQ';
import TeamScreen from './screens/Team';
import Drawer from './screens/Drawer';

const drawerWidth = 100;
const iconSize = {width: drawerWidth - 20, height: drawerWidth - 20};

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
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./assets/images/icon1.png')}
            resizeMode="center"
            style={[{tintColor: tintColor}, iconSize]}
          />
        ),
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./assets/images/icon3.png')}
            resizeMode="center"
            style={[{tintColor: tintColor}, iconSize]}
          />
        ),
      },
    },
    FAQ: {
      screen: FAQScreen,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./assets/images/icon4.png')}
            resizeMode="center"
            style={[{tintColor: tintColor}, iconSize]}
          />
        ),
      },
    },
    Team: {
      screen: TeamScreen,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./assets/images/icon5.png')}
            resizeMode="center"
            style={[{tintColor: tintColor}, iconSize]}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    drawerWidth: drawerWidth,
    contentComponent: Drawer,
    contentOptions: {
      activeBackgroundColor: 'transparent',
      activeTintColor: '#fab923',
      iconContainerStyle: {
        marginVertical: 10,
        opacity: 1,
        width: iconSize.width,
        height: iconSize.height,
      },
    },
  },
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
