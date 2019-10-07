import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default Layout = props => (
  <ImageBackground
    style={styles.container}
    source={require('../assets/images/background.png')}>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Home')}>
          <Image style={styles.button} source={require('../assets/icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={props.navigation.toggleDrawer}>
          <Image
            style={styles.button}
            source={require('../assets/images/bar.png')}
          />
        </TouchableOpacity>
      </View>
      {props.children}
    </SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  button: {
    width: 50,
    height: 50,
  },
});
