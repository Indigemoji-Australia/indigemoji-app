import React from 'react';
import { ScrollView, StatusBar, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Background from '../constants/Background';
import Layout from '../constants/Layout';
import Loading from './Loading';
import styles from '../constants/IntroStyle';

export default class IntroFour extends React.Component {
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
                <ImageBackground source={Background.IntroScreenHeader2} style={styles.banner} imageStyle={{ resizeMode: 'cover' }}></ImageBackground>
              </View>
              <View style={styles.textBlock}>
                <Text style={[styles.text, {fontWeight: 'bold', marginTop: 62, fontSize: 16}]}>Tyerretye anwerkenhe-arle itnhenhe-areye mpwareke. Arrernte ilyernpenye-areye help-me-ileme angkentye arratye arrerneke.</Text>
                <Text style={[styles.text, {fontSize: 15}]}>These emoji stickers were made by hundreds of young people with senior Arrernte cultural advisors, for you to use.</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.footerPagination}></Text>
              <Text style={styles.footerPagination}></Text>
              <Text style={styles.footerPagination}></Text>
              <Text style={styles.footerPaginationActive}></Text>
              <Text style={styles.footerPagination}></Text>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }

  _goNextScreenAsync = async (page) => {
    this.props.nav.navigate(page);
  };
}