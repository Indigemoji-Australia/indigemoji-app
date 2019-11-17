import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Linking,
} from 'react-native';
import {
  TextBody,
  TextTitle,
  Link,
  TextStrong,
  TextWrapper,
} from './TextComponents';
import Layout from './Layout';

const win = Dimensions.get('window');

export default class TeamScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <TextWrapper>
          <ScrollView style={{flex: 1}}>
            <TextTitle>Anwerne-akerte / Team</TextTitle>
            <TextBody>
              <TextStrong>
                Arne-nhenhe-areye arrekantherre ileme anwerne-akerte, altyerre,
                arne, awelhentye-areye, angkentye anwernekenhe-uthene. Tyerretye
                anwerkenhe-arle itnhenhe-areye mpwareke. Arrernte
                ilyernpenye-areye help-me-ileme angkentye arratye arrerneke.
              </TextStrong>
            </TextBody>

            <TextBody>
              This sticker set was designed by hundreds of young people and
              senior Arrernte cultural advisers during seven weeks of workshops
              as part of the Alice Springs Public Library’s Geek in Residence
              program. It is funded by the Northern Territory Government with
              support from the Alice Springs Town Council.
            </TextBody>

            <TextBody>
              inDigiMOB supported a team of senior artists and digital mentors
              to work with these young artists to realise their ideas. Leigh
              Harris and ingeous studios developed this app. We also thank the
              generous support of the Johnston Foundation.
            </TextBody>
            <TextBody>
              Emoji advisers: Veronica Dobson Perrurle, Kathleen Wallace
              Kemarre, Joel Liddle Perrurle and Amelia Turner
            </TextBody>
            <TextBody>Producer: Caddie Brain</TextBody>
            <TextBody>
              Senior artists: Graham Wilfred, Dave Webb, Phillip McCormack, Emma
              Stubbs, Wyona Palmer, Colleen Powell, Lindsey Matthews, John
              Lewis, Benita Clements, Ricky Connick Jakamara, Dion Beasley and
              Elliat Rich
            </TextBody>
            <TextBody>
              Featured young emoji artists: Abraham Lennie, Aisha, Alba, Ashley
              Marshall, Astrid Keaney, Broadie, Cherina, Chris Jones, Denzel
              Steel, Dustin, Elizabeth Coulthard, Ellis, Ernestine Mulkatana,
              Felicity Malbunka, Ishmale, Jasmine Coulthard, Jessie, Joyanne
              Tilmouth, Kaylene Nelson, Kelvin Campbell, Lilah, Lily Blackman,
              Lucas Jones, Megan Noall, Mia Satour, Mikara Tilmouth, Mishka
              Kiessling, Mitchell, Natasha Angus, Onna, Reshanna, Sebastian,
              Shinarah, Tarynt Stubbs, Tjikiti Liddle, Vanessa and Vicprsha
            </TextBody>
            <TextBody>
              Youth team: Matt D’Penguin, Alice Goddard, Else Kennedy, Pathi Raj
              and Lindsey Matthews
            </TextBody>
            <TextBody>
              The use of Aboriginal Flag is courtesy of Harold Thomas and WAM
              Clothing.
            </TextBody>
            <TextBody>
              Full credits on the{' '}
              <Link url="http://www.indigemoji.com.au/">
                Indigemoji website.
              </Link>
              .
            </TextBody>
            <View>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://nt.gov.au/')}>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/ntglogo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://indigimob.com.au/')}>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/indigimoblogo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'http://www.alicesprings.nt.gov.au/services/library',
                  )
                }>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/library.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://www.desertpenguin.com.au/')
                }>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/penguin.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.ingeousstudios.com/')
                }>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/ingeoussociallogo.png')}
                />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../assets/images/johnston_foundation.jpg')}
              />
            </View>
            <View style={{height: 50}}></View>
          </ScrollView>
        </TextWrapper>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
  },
});
