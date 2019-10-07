import React from "react";
import {
  ScrollView,
  NetInfo,
  ToastAndroid,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { Icon, Input } from "react-native-elements";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Circle";
import Background from "../constants/Background";
import Layout from "../constants/Layout";
import IconDetail from "./IconDetail";
import Header from "./Header";
import {emojis} from "../assets/emojis.json";


export default class IconList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      showDetails: false,
      connection_Status: "",
      stickers: emojis,
      iconInfo: {},
      searchString: "",
      imageStatus: "loading",
    };
  }

  componentDidMount() {}

  render() {
    if (this.state.listView) {
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
        <ImageBackground
          source={Background.allType}
          resizeMode="cover"
          style={{
            backgroundColor: "#fab923",
          }}
        >
          <Header mainPage={e => this._goNextScreenAsync(e)} />
          <View style={styles.overlayBlock}>
            <View style={{ marginTop: 20, width: "100%" }}>
              <Input
                placeholder="search"
                value={this.state.searchString}
                onChange={this._handleChange}
                inputContainerStyle={styles.searchField}
                inputStyle={{
                  paddingLeft: 10,
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#000",
                }}
              />
            </View>
            <ScrollView style={styles.stickerScroll}>
              <View style={styles.stickerList}>
                {stickerLibraries.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this._getInfo(item)}
                    >
                      <Image
                        source={{ uri: item.image }}
                        indicator={ProgressBar}
                        indicatorProps={{
                          size: 50,
                          color: "rgba(150, 150, 150, 1)",
                          unfilledColor: "rgba(200, 200, 200, 0.2)",
                        }}
                        style={styles.sticker}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={Background.allType}
          resizeMode="cover"
          style={{ width: Layout.window.width, height: Layout.window.height }}
        >
          <Header mainPage={e => this._goNextScreenAsync(e)} />
          <IconDetail data={this.state.iconInfo} closeMenu={this._closeMenu} />
        </ImageBackground>
      );
    }
  }

  _getInfo = async item => {
    // this.setState({ loading: true });
    // setTimeout(() => {
    // }, 200);
    this.setState({ listView: false, iconInfo: item });
  };

  _handleChange = async e => {
    this.setState({ searchString: e.nativeEvent.text });
  };

  _goNextScreenAsync = async page => {
    return this.props.nav.navigate(page);
  };

  _goBackScreenAsync = () => {
    this.props.nav.navigateBack();
  };

  _closeMenu = async () => {
    this.setState({ listView: true });
    // await this.componentDidMount();
  };
}

const styles = StyleSheet.create({
  overlayBlock: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    top: 100,
    width: Layout.window.width,
    backgroundColor: "#fff",
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "flex-start",
  },
  searchField: {
    borderWidth: 1,
    borderColor: "#000",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  stickerList: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
    flex: 1,
  },
  stickerScroll: {
    flex: 1,
  },
  sticker: {
    width: (Layout.window.width - 60) / 4 - 10,
    height: (Layout.window.width - 60) / 4 - 10,
    margin: 5,
  },
});
