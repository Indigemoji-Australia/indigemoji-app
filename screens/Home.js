import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  SafeArea,
  Modal,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Layout from './Layout';
import Intro from './Intro';
import {emojis} from '../assets/emojis.json';
const win = Dimensions.get('window');

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickers: emojis,
      searchString: '',
      showIntro: false,
    };
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('hasOpened');
      if (value === null) {
        this.setState({showIntro: true});
        await AsyncStorage.setItem('hasOpened', "true")
      }
    } catch (e) {
      console.warn(e);
    }
  }

  onSearchChange = e => {
    this.setState({searchString: e.nativeEvent.text});
  };

  viewEmoji = data => {
    this.props.navigation.navigate('EmojiDetails', {data: data});
  };

  hideIntro = () => {
    this.setState({showIntro: false});
  };

  render() {
    let stickerLibraries = this.state.stickers;
    let searchString = this.state.searchString.trim().toLowerCase();

    if (this.state.searchString.length > 0) {
      searchString = this.state.searchString.trim().toLowerCase();
      stickerLibraries = stickerLibraries.filter(l => {
        return (
          l.name.toLowerCase().match(searchString) ||
          l.name_arrernte.toLowerCase().match(searchString)
        );
      });
    }

    return (
      <Layout navigation={this.props.navigation}>
        <View style={styles.overlayBlock}>
          <View style={{marginTop: 20, width: '100%'}}>
            <TextInput
              placeholder="search"
              value={this.state.searchString}
              onChange={this.onSearchChange}
              style={styles.searchField}
            />
          </View>
          <ScrollView style={{flex: 1}}>
            <View style={styles.stickerList}>
              {stickerLibraries.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.viewEmoji(item)}>
                  <Image
                    source={{uri: item.image}}
                    indicatorProps={{
                      size: 50,
                      color: 'rgba(150, 150, 150, 1)',
                      unfilledColor: 'rgba(200, 200, 200, 0.2)',
                    }}
                    style={styles.sticker}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showIntro}>
          <Intro hideIntro={this.hideIntro} />
        </Modal>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  searchField: {
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  overlayBlock: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sticker: {
    width: (win.width - 60) / 4 - 10,
    height: (win.width - 60) / 4 - 10,
    margin: 5,
  },
  stickerList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
    flex: 1,
  },
});
