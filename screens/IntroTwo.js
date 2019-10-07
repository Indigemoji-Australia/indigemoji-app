import React from "react";
import { ScrollView, StatusBar, View, ImageBackground } from "react-native";
import { Text } from "react-native-elements";
import Background from "../constants/Background";
import Layout from "../constants/Layout";
import Loading from "./Loading";
import styles from "../constants/IntroStyle";

export default class IntroTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={Background.allType}
        style={{
          width: Layout.window.width,
          height: Layout.window.height,
          backgroundColor: "#fab923",
        }}
      >
        <StatusBar backgroundColor="#fab923" barStyle="light-content" />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.screenHeader}>
              <ImageBackground
                source={Background.IntroScreenHeader1}
                style={styles.banner}
                imageStyle={{ resizeMode: "contain" }}
              ></ImageBackground>
            </View>
            <View style={styles.textBlock}>
              <Text
                style={[
                  styles.text,
                  { fontWeight: "bold", marginTop: 62, fontSize: 16 },
                ]}
              >
                Anwerne akangentye arrantherre apetyeke Indigemoji-kenhe
                aretyeke. Arne-nhenhe-areye arrekantherre ileme anwerne-akerte,
                altyerre, arne, awelhentye-areye, angkentye anwernekenhe-uthene.
                Impene anthurre kwenhe arrantherre angkentye akaltye-irretyeke,
                angkentye anwernekenhe akwete-ante rlterrke antirrkwetyeke
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.footerPagination}></Text>
            <Text style={styles.footerPaginationActive}></Text>
            <Text style={styles.footerPagination}></Text>
            <Text style={styles.footerPagination}></Text>
            <Text style={styles.footerPagination}></Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
