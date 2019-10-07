import React from 'react';
import {
  Modal,
  Button,
  Platform,
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
  Icon,
  TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Background from '../constants/Background';

export default Intro = props => (
  <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
    <View style={styles.introSlide}>
      <ImageBackground
        source={Background.allType}
        style={{
          backgroundColor: '#fab923',
          flex: 1,
        }}>
        <StatusBar backgroundColor="#fab923" barStyle="light-content" />
        <TouchableHighlight onPress={() => props.setModalVisible(false)} style={styles.closeButton}>
          <Text>X</Text>
        </TouchableHighlight>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.screenHeader}>
              <Image
                source={Background.StartScreenHeader}
                style={styles.logo}
              />
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
                Australia’s first set of Indigenous emojis made on Arrernte
                country in Mparntwe / Alice Springs.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>

    <View style={styles.introSlide}>
      <ImageBackground
        source={Background.allType}
        style={{
          backgroundColor: '#fab923',
        }}>
        <StatusBar backgroundColor="#fab923" barStyle="light-content" />
        <TouchableHighlight onPress={() => props.setModalVisible(false)} style={styles.closeButton}>

          <Text>X</Text>
        </TouchableHighlight>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.screenHeader}>
              <ImageBackground
                source={Background.IntroScreenHeader1}
                style={styles.banner}
                imageStyle={{resizeMode: 'contain'}}></ImageBackground>
            </View>
            <View style={styles.textBlock}>
              <Text
                style={[
                  styles.text,
                  {fontWeight: 'bold', marginTop: 62, fontSize: 16},
                ]}>
                Anwerne akangentye arrantherre apetyeke Indigemoji-kenhe
                aretyeke. Arne-nhenhe-areye arrekantherre ileme anwerne-akerte,
                altyerre, arne, awelhentye-areye, angkentye anwernekenhe-uthene.
                Impene anthurre kwenhe arrantherre angkentye akaltye-irretyeke,
                angkentye anwernekenhe akwete-ante rlterrke antirrkwetyeke
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>

    <View style={styles.introSlide}>
      <ImageBackground
        source={Background.allType}
        style={{
          backgroundColor: '#fab923',
        }}>
        <StatusBar backgroundColor="#fab923" barStyle="light-content" />
        <TouchableHighlight onPress={() => props.setModalVisible(false)} style={styles.closeButton}>

          <Text>X</Text>
        </TouchableHighlight>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.screenHeader}>
              <ImageBackground
                source={Background.IntroScreenHeader1}
                style={styles.banner}
                imageStyle={{resizeMode: 'contain'}}></ImageBackground>
            </View>
            <View style={styles.textBlock}>
              <Text style={[styles.text, {fontSize: 15, marginTop: 62}]}>
                Welcome to the Indiemoji app! This sticker set represents life,
                culture and language in our part of Central Australia, the
                traditional land of the Arrernte people. It is important you
                learn so that we hold our language strong, forever.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>

    <View style={styles.introSlide}>
      <ImageBackground
        source={Background.allType}
        style={{
          backgroundColor: '#fab923',
        }}>
        <StatusBar backgroundColor="#fab923" barStyle="light-content" />
        <TouchableHighlight onPress={() => props.setModalVisible(false)} style={styles.closeButton}>

          <Text>X</Text>
        </TouchableHighlight>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.screenHeader}>
              <ImageBackground
                source={Background.IntroScreenHeader2}
                style={styles.banner}
                imageStyle={{resizeMode: 'cover'}}></ImageBackground>
            </View>
            <View style={styles.textBlock}>
              <Text
                style={[
                  styles.text,
                  {fontWeight: 'bold', marginTop: 62, fontSize: 16},
                ]}>
                Tyerretye anwerkenhe-arle itnhenhe-areye mpwareke. Arrernte
                ilyernpenye-areye help-me-ileme angkentye arratye arrerneke.
              </Text>
              <Text style={[styles.text, {fontSize: 15}]}>
                These emoji stickers were made by hundreds of young people with
                senior Arrernte cultural advisors, for you to use.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>

    <View style={styles.introSlide}>
      <ImageBackground
        source={Background.allType}
        style={{
          backgroundColor: '#fab923',
        }}>
        <StatusBar backgroundColor="#fab923" barStyle="light-content" />
        <TouchableHighlight onPress={() => props.setModalVisible(false)} style={styles.closeButton}>

          <Text>X</Text>
        </TouchableHighlight>
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
                Unte apeke emoji renhe yernetyeke, app nhenhe altywere-ilaye,
                kele emoji unte ahentye-aneme uthemele, kele imernte
                antherreme-kenhe-button ulthemele.
              </Text>
              <Text style={[styles.text, {fontSize: 15}]}>
                To share an emoji sticker, just open this app, select the
                sticker you want to use and then tap the share button. You can
                then choose which platform you want to share the sticker on.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  </Swiper>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screenHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: 'hidden',
  },
  logo: {},
  banner: {
    backgroundColor: '#F5F4F5',
  },
  textBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#fff',
    marginBottom: 10,
    // fontFamily: 'arial-rounded-bold',
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'bold',
    color: '#000',
    // fontFamily: 'arial-rounded-bold'
  },
  text: {
    color: '#000',
    // fontFamily: 'arial-rounded-bold',
    marginBottom: 15,
    fontSize: 18,
  },
  exploreBtn: {
    backgroundColor: '#fab923',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    padding: 10,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
    marginBottom: 40,
  },
  footerPagination: {
    width: 16,
    height: 16,
    borderRadius: 14,
    backgroundColor: 'rgba(46, 41, 37, 0.55)',
    margin: 3,
  },
  footerPaginationActive: {
    width: 16,
    height: 16,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    margin: 3,
  },
  introSlide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 888,
  }
});
