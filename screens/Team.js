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
            <TextTitle>Team</TextTitle>
            <TextBody>
              <TextStrong>
                Arne-nhenhe-areye arrekantherre ileme anwerne-akerte, altyerre,
                arne, awelhentye-areye, angkentye anwernekenhe-uthene. Tyerretye
                anwerkenhe-arle itnhenhe-areye mpwareke. Arrernte
                ilyernpenye-areye help-me-ileme angkentye arratye arrerneke.
              </TextStrong>
            </TextBody>

            <TextBody>
              This sticker set represents life, culture and language in Central
              Australia, the traditional land of the Arrernte people. The images
              were made by hundreds of young people with senior Arrernte
              cultural advisors for you to use.
            </TextBody>

            <TextBody>
              Over 1000 young participants took part in eight weeks of workshops
              at the Alice Springs Public Library, run by the Geek in Residence
              program and funded by the Northern Territory Government.{' '}
            </TextBody>
            <TextBody>
              Indigimob supported a team of senior artists and digital mentors
              to work with the young people to realise their ideas. Leigh Harris
              and Ingeous Studios developed this app. We also thank the generous
              support of the Johnston Foundation.
            </TextBody>
            <TextBody>
              Emoji advisors: Veronica Dobson Perrurle, Kathleen Wallace
              Kemarre, Joel Liddle Perrurle and Amelia Turner
            </TextBody>
            <TextBody>Producer: Caddie Brain</TextBody>
            <TextBody>
              Senior artists: Dave Webb, Graham Wilfred, Phillip McCormack, Emma
              Stubbs, Wyona Palmer, Lindsey Matthews, John Lewis, Benita
              Clements, Ricky Connick Jakamara, Elizabeth Oolodoodi, Dion
              Beasley and Elliat Rich
            </TextBody>
            <TextBody>
              Featured young emoji artists: Chris, Kaylene, Cherina, Vicprsha,
              Ishmale, Elizabeth, Coulthard, Joyanne, Mia, Megan, Ashley,
              Jessie, Tjikiti, Lilah, Ellis, Broadie, Shinarah, Astrid, Abraham,
              Denzel, Tarynt, Sebastian, Kelvin, Ernestine, Dustin, Lucas,
              Reshanna, Natasha, Mitchell, Vanessa, Alba, Aisha, Felicity
            </TextBody>
            <TextBody>
              Youth team: Matt D’Penguin, Alice Goddard, Else Kennedy, Pathi Raj
              and Lindsey Matthews
            </TextBody>
            <TextBody>
              Full credits on the{' '}
              <Link url="http://www.indigemoji.com.au/">
                Indigemoji website
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
