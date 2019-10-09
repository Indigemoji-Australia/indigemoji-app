import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
  SafeArea,
  Dimensions,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import Swiper from 'react-native-swiper';

// <Icon
//   name="x"
//   type="feather"
//   color="#4a4a4a"
//   size={26}
//   iconStyle={styles.close}
//   onPress={props.hideIntro}
// />
const win = Dimensions.get('window');
const bgImage = require('../assets/images/background.png');

const IntroPanel = props => (
  <ScrollView style={{flex: 1}}>
    <StatusBar backgroundColor="#fab923" barStyle="light-content" />
    {props.image && <Image source={props.image} style={styles.image} />}

    <SafeAreaView>
      <View style={styles.textBlock}>
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        {props.subTitle && (
          <Text style={styles.subTitle}>{props.subTitle}</Text>
        )}
        {props.text && <Text style={styles.text}>{props.text}</Text>}
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default Intro = props => (
  <ImageBackground style={{flex: 1}} source={bgImage}>
    <View style={{position: 'absolute', zIndex: 1, right: 0}}>
      <Button
        style={styles.close}
        icon={
          <Icon name="x" type="feather" size={20} color="#fff" iconStyle={{}} />
        }
        title="Close"
        type="clear"
        titleStyle={{color: '#fff', fontSize: 20}}
        onPress={props.hideIntro}
      />
    </View>
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
      }}>
      <Swiper
        showsButtons={false}
        loop={false}
        style={{zIndex: 0, position: 'absolute'}}>
        <View style={styles.introSlide}>
          <IntroPanel
            title="indigemoji"
            subTitle="Emoji itne-areye arrwekele anthurre Australia-kenhe. Tyerretye Arrernte-areye itnenhe mpwareke, Arrernte-kenhe apmerenge."
            text="Australia’s first set of Indigenous emojis made on Arrernte country in Mparntwe / Alice Springs."
            image={require('../assets/images/start_header.png')}
          />
        </View>

        <View style={styles.introSlide}>
          <IntroPanel
            title="Werte!"
            subTitle="Anwerne akangentye arrantherre apetyeke Indigemoji-kenhe aretyeke. Arne-nhenhe-areye arrekantherre ileme anwerne-akerte, altyerre, arne, awelhentye-areye, angkentye anwernekenhe-uthene. Impene anthurre kwenhe arrantherre angkentye akaltye-irretyeke, angkentye anwernekenhe akwete-ante rlterrke antirrkwetyeke."
            text="Welcome to the Indiemoji app! This sticker set represents life, culture and language in our part of Central Australia, the traditional land of the Arrernte people. It is important you learn so that we hold our language strong, forever."
            image={require('../assets/images/screen1_header.png')}
          />
        </View>

        <View style={styles.introSlide}>
          <IntroPanel
            subTitle="Tyerretye anwerkenhe-arle itnhenhe-areye mpwareke. Arrernte ilyernpenye-areye help-me-ileme angkentye arratye arrerneke."
            text="These emoji stickers were made by hundreds of young people with senior Arrernte cultural advisors, for you to use."
            image={require('../assets/images/screen2_header.png')}
          />
        </View>

        <View style={styles.introSlide}>
          <IntroPanel
            title="Antherreme!"
            subTitle="Unte apeke emoji renhe yernetyeke, app nhenhe altywere-ilaye, kele emoji unte ahentye-aneme uthemele, kele imernte antherreme-kenhe-button ulthemele."
            text="To share an emoji sticker, just open this app, select the sticker you want to use and then tap the share button. You can then choose which platform you want to share the sticker on."
            image={require('../assets/images/screen3_header.png')}
          />
        </View>
      </Swiper>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {
    height: (1360 * win.width) / 1440,
    width: win.width,
    resizeMode: 'contain',
    marginBottom: 15,
    zIndex: 0,
  },
  textBlock: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#fff',
    marginBottom: 15,
    fontSize: 40,
    fontWeight: 'bold',
    // fontFamily: 'arial-rounded-bold',
  },
  subTitle: {
    color: '#000',
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'arial-rounded-bold'
  },
  text: {
    color: '#fff',
    marginBottom: 15,
    fontSize: 20,
    // fontFamily: 'arial-rounded-bold',
  },
  introSlide: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 0,
  },
  close: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 999,
    backgroundColor: '#fab923',
  },
});
