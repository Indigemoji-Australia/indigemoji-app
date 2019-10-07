import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Circle';

import Share from 'react-native-share';
import Layout from '../constants/Layout';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class IconDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      languege: 'ar',
      pressStatus: true,
      favStatus: this.props.data.is_favourite
    }
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({loading: false})
    }
  }

  onShare = async (data) => {
    let shareImageBase64 = {
      url: data.image
    };
    Share.open(shareImageBase64);
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.overlayBlock}>
          <Icon
            name='times'
            type='font-awesome'
            color='#4a4a4a'
            size={26}
            iconStyle={{ zIndex: 10 }}
            onPress={this.props.closeMenu} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: (Layout.window.width - 60), marginTop: 10, marginBottom: 20 }}>
            <Text>Please wait...</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.overlayBlock}>
          <Icon
            name='times'
            type='font-awesome'
            color='#4a4a4a'
            size={26}
            iconStyle={{ zIndex: 10 }}
            onPress={this.props.closeMenu} />
          <ScrollView>
              <View style={styles.stickerDetail}>
                <Image
                  source={{uri: this.props.data.image}}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 50,
                    borderWidth: 0,
                    color: 'rgba(150, 150, 150, 1)',
                    unfilledColor: 'rgba(200, 200, 200, 0.2)'
                  }}
                  style={styles.stickerImage}
                />
                { this.state.languege === 'en' ? (<Text style={{textAlign: 'center', fontSize: 32, fontWeight: 'bold', color: '#000', marginBottom: 50}}>{this.props.data.name}</Text>) : <Text style={{textAlign: 'center', fontSize: 32, fontWeight: 'bold', color: '#000', marginBottom: 50}}>{this.props.data.name_arrernte}</Text> }
                <View style={styles.buttonGroup}>
                  <TouchableOpacity onPress={() => this._changeLanguage('ar')}>
                    <Text style={this.state.pressStatus && (this.state.languege === 'ar')
                          ? styles.buttonPress
                          : styles.button}>Arrernte</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._changeLanguage('en')}>
                    <Text style={this.state.pressStatus && (this.state.languege === 'en')
                          ? styles.buttonPress
                          : styles.button}>English</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginBottom: 20, width: (Layout.window.width - 40) }}>
                <Button
                  icon={
                    <Icon
                      name='chevron-left'
                      type='feather'
                      size={30}
                      color="#676767"
                      iconStyle={{marginRight: 5}}
                    />
                  }
                  title="back"
                  type="clear"
                  titleStyle={{color: '#676767', fontSize: 20}}
                  // buttonStyle={{margin: 4}}
                  onPress={this.props.closeMenu}
                />
                <Button
                  icon={
                    <Icon
                      name={this.state.favStatus ? 'heart' : 'heart-o'}
                      type='font-awesome'
                      size={30}
                      color="#676767"
                      iconStyle={{marginRight: 5}}
                    />
                  }
                  title="fav"
                  type="clear"
                  titleStyle={{color: '#676767', fontSize: 20}}
                  // buttonStyle={{margin: 4}}
                  onPress={() => this._favSticker(this.props.data.id)}
                />
                <Button
                  icon={
                    <Icon
                      name='copy'
                      type='feather'
                      size={30}
                      color="#676767"
                      iconStyle={{marginRight: 5}}
                    />
                  }
                  title="share"
                  type="clear"
                  titleStyle={{color: '#676767', fontSize: 20}}
                  // buttonStyle={{margin: 4}}
                  onPress={() => this.onShare(this.props.data)}
                />
              </View>
          </ScrollView>
        </View>
      );
    }
  }

  _changeLanguage = async(lang) => {
    this.setState({languege: lang})
  }

  _favSticker = async(id) => {
    this.setState({loading: true})
    if (this.state.favStatus) {
      this.setState({favStatus: false, loading: false})
      
      db.transaction(txn => {
        txn.executeSql(
          'UPDATE emojies set is_favourite=? where id=?',
          [0, id]
        )
      })

    } else {
      this.setState({favStatus: true, loading: false})
      db.transaction(txn => {
        txn.executeSql(
          'UPDATE emojies set is_favourite=? where id=?',
          [1, id]
        )
      })
    }
  }
}

const styles = StyleSheet.create({
  overlayBlock: {
    position: 'absolute',
    bottom: 0,
    top: 100,
    width: Layout.window.width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-start'
  },
  overlayTitle: {
    color: '#676767',
    fontSize: 20,
    fontWeight: '500',
    width: Layout.window.width,
    textAlign: 'center',
    marginBottom: 5
  },
  stickerDetail: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: (Layout.window.width - 40),
    marginTop: 10
  },
  stickerImage: {
    width: Layout.window.width / 2.2,
    height: Layout.window.width / 2.2,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  button: {
    width: Layout.window.width / 3,
    padding: 10,
    fontSize: 24,
    color: '#fff',
    backgroundColor: '#646464',
    textAlign: 'center'
  },
  buttonPress: {
    width: Layout.window.width / 3,
    padding: 10,
    fontSize: 24,
    color: '#fff',
    backgroundColor: '#fab923',
    textAlign: 'center'
  }
});
