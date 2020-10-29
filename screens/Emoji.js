import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';
import Share from 'react-native-share';
// To install, run "npm install react-native-sound" then "react-native link react-native-sound"
import Sound from 'react-native-sound';
const win = Dimensions.get('window');

export default class IconDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'ar',
      audioPlaying: false,
    };
  }

  // All sound filenames must be in lowercase with no spaces.
  // Sound files must be in the following places:
  // Android: Save your sound clip files under the directory android/app/src/main/res/raw. Note that files in this directory must be lowercase and underscored (e.g. my_file_name.mp3) and that subdirectories are not supported by Android.
  // iOS: Open Xcode and add your sound files to the project (Right-click the project and select Add Files to [PROJECTNAME])
  // We may want to make an automation tool for doing both of the above at some point.
  playSound(soundToPlay) {
    if (this.sound) {
      this.sound.stop();
      this.sound.release();
      this.sound = undefined;
      this.setState({ language: this.state.language, audioPlaying: false });
    }
    else {
      this.setState({ language: this.state.language, audioPlaying: true });

      this.sound = new Sound(soundToPlay, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          // do something?
          alert(error.message);
          alert(soundToPlay);
        }
        // play when loaded
        this.sound.play(() => {
          this.sound.release();
          this.setState({ language: this.state.language, audioPlaying: false });
          this.sound = undefined;
        });
      });
    }
  }

  changeLanguage(lang) {
    this.setState({ language: lang, audioPlaying: this.state.audioPlaying });
  }

  async onShare(data) {
    let shareOptions = {
      url: `data:image/png;base64,${data.data}`,
      // url: images.image1,
      type: 'image/png',
      failOnCancel: false,
      excludedActivityTypes: [
        'com.apple.UIKit.activity.SaveToCameraRoll',
        'com.apple.UIKit.activity.AssignToContact',
      ],
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.warn(error);
    }
  }

  render() {
    let emoji = this.props.navigation.getParam('data');
    return (
      <ScrollView>
        <View style={styles.stickerDetail}>
          <Image
            source={{ uri: emoji.file.replace('.png', '') }}
            style={styles.stickerImage}
          />
          <Text style={styles.stickerName}>
            {this.state.language === 'en' ? emoji.name : emoji.name_arrernte}
          </Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => this.changeLanguage('ar')}>
              <Text
                style={
                  this.state.language === 'ar'
                    ? styles.buttonPress
                    : styles.button
                }>
                Arrernte
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeLanguage('en')}>
              <Text
                style={
                  this.state.language === 'en'
                    ? styles.buttonPress
                    : styles.button
                }>
                English
              </Text>
            </TouchableOpacity>
          </View>

          <View 
            style={{
                display:"flex",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                marginBottom: 20,
              }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                marginBottom: 20,
              }}>
              <Button
                icon={
                  <Icon
                    name="copy"
                    type="feather"
                    size={30}
                    color="#676767"
                    iconStyle={{ marginRight: 5 }}
                  />
                }
                title="share"
                type="clear"
                titleStyle={{ 
                  fontFamily: 'Feather',
                  color: '#676767', 
                  fontSize: 20 
                }}
                onPress={() => this.onShare(emoji)}
              />
            </View>
            {emoji.audio != undefined
              ?
              <TouchableOpacity style={styles.playButton} onPress={() => this.playSound(emoji.audio)}>
                {this.state.audioPlaying == false
                  ?
                  <Image style={styles.playButtonIcon} source={require('../assets/images/audio-off.png')} />
                  :
                  <Image style={styles.playButtonIcon} source={require('../assets/images/audio-on.png')} />
                }
                <Text style={styles.playButtonText}>
                  play
			        </Text>
              </TouchableOpacity>
              :
              <Text></Text>
            }
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  overlayTitle: {
    color: '#676767',
    fontSize: 20,
    fontWeight: '500',
    width: win.width,
    textAlign: 'center',
    marginBottom: 5,
  },
  stickerDetail: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  stickerImage: {
    width: win.width / 2.2,
    height: win.width / 2.2,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: win.width / 3,
    padding: 10,
    fontSize: 24,
    color: '#fff',
    backgroundColor: '#646464',
    textAlign: 'center',
  },
  buttonPress: {
    width: win.width / 3,
    padding: 10,
    fontSize: 24,
    color: '#fff',
    backgroundColor: '#fab923',
    textAlign: 'center',
  },
  stickerName: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: Platform.OS === 'ios' ? 'ArialRoundedMTBold' : 'ArialRoundedBold',
    color: '#000',
    marginBottom: 50,
  },
  playButton: {
    display: "flex",
    flexDirection: "row",
  },
  playButtonText: {
    fontFamily: 'Feather',
    marginRight: 12,
    fontSize: 20,
    color: '#676767',
  },
  playButtonIcon: {
    marginRight: 8,
    width:30,
    height:30,
  }
});
