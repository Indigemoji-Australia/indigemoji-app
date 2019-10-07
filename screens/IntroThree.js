import React from 'react';
import { ScrollView, StatusBar, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';
import Background from '../constants/Background';
import Layout from '../constants/Layout';
import Loading from './Loading';
import styles from '../constants/IntroStyle';

export default class IntroThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    let that = this;
    that.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <ImageBackground source={Background.allType} style={{width: Layout.window.width, height: Layout.window.height, backgroundColor: '#fab923'}}>
          <StatusBar backgroundColor="#fab923" barStyle="light-content" />
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.screenHeader}>
                <ImageBackground source={Background.IntroScreenHeader1} style={styles.banner} imageStyle={{ resizeMode: 'contain' }}></ImageBackground>
              </View>
              <View style={styles.textBlock}>
                <Text style={[styles.text, {fontSize: 15, marginTop: 62}]}>Welcome to the Indiemoji app! This sticker set represents life, culture and language in our part of Central Australia, the traditional land of the Arrernte people. It is important you learn so that we hold our language strong, forever.</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.footerPagination}></Text>
              <Text style={styles.footerPagination}></Text>
              <Text style={styles.footerPaginationActive}></Text>
              <Text style={styles.footerPagination}></Text>
              <Text style={styles.footerPagination}></Text>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
}