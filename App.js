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

const icons = {
  home: require('./assets/images/icon1.png'),
  about: require('./assets/images/icon3.png'),
  faq: require('./assets/images/icon4.png'),
  team: require('./assets/images/icon5.png'),
};

const drawerWidth = 100;
const iconSize = {width: drawerWidth - 20, height: drawerWidth - 20};

const defaultStackOptions = {
  headerTransparent: true,
  headerStyle: {borderBottomWidth: 0, height: 0},
};

const makeIcon = icon => {
  return ({tintColor}) => (
    <Image source={icon} style={[{tintColor: tintColor}, iconSize]} />
  );
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
        drawerIcon: makeIcon(icons.home),
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: makeIcon(icons.about),
      },
    },
    FAQ: {
      screen: FAQScreen,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: makeIcon(icons.faq),
      },
    },
    Team: {
      screen: TeamScreen,
      navigationOptions: {
        drawerLabel: () => null,
        drawerIcon: makeIcon(icons.team),
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
