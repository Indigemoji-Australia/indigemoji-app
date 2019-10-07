import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import Background from '../constants/Background';
import styles from '../constants/IntroStyle';

export default IntroOne = props => (
  <ImageBackground
    source={Background.allType}
    style={{
      backgroundColor: '#fab923',
    }}>
    <StatusBar backgroundColor="#fab923" barStyle="light-content" />
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          <Image source={Background.StartScreenHeader} style={styles.logo} />
        </View>
        <View style={styles.textBlock}>
          <Text h1 style={styles.title}>
            Werte!
          </Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            Emoji itne-areye arrwekele anthurre Auttstralia-kenhe. Tyerretye
            Arrernte-areye itnenhe mpwareke, Arrernte-kenhe apmerenge.{' '}
          </Text>
          <Text style={styles.text}>
            Australia’s first set of Indigenous emojis made on Arrernte country
            in Mparntwe / Alice Springs.
          </Text>
        </View>
      </View>
    </ScrollView>
  </ImageBackground>
);
