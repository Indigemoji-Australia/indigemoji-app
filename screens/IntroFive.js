import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Icon
} from 'react-native';
import Background from '../constants/Background';
import styles from '../constants/IntroStyle';

export default IntroFive = props => (
  <ImageBackground
    source={Background.allType}
    style={{
      backgroundColor: '#fab923',
    }}>
    <StatusBar backgroundColor="#fab923" barStyle="light-content" />
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          <ImageBackground
            source={Background.IntroScreenHeader4}
            style={styles.banner}
            imageStyle={{resizeMode: 'contain'}}></ImageBackground>
        </View>
        <View style={styles.textBlock}>
          <Text h1 style={styles.title}>
            Antherreme!
          </Text>
          <Text style={[styles.text, {fontWeight: 'bold', fontSize: 16}]}>
            Unte apeke emoji renhe yernetyeke, app nhenhe altywere-ilaye, kele
            emoji unte ahentye-aneme uthemele, kele imernte
            antherreme-kenhe-button ulthemele.
          </Text>
          <Text style={[styles.text, {fontSize: 15}]}>
            To share an emoji sticker, just open this app, select the sticker
            you want to use and then tap the share button. You can then choose
            which platform you want to share the sticker on.
          </Text>
        </View>
      </View>
    </ScrollView>
  </ImageBackground>
);
