import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {TextBody, TextTitle, Link, TextStrong} from './TextComponents';
import Layout from './Layout';

export default class TeamScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <ScrollView style={{flex: 1, padding: 30, marginBottom: 30}}>
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
            were made by hundreds of young people with senior Arrernte cultural
            advisors for you to use.
          </TextBody>

          <TextBody>
            Over 1000 young participants took part in eight weeks of workshops
            at the Alice Springs Public Library, run by the Geek in Residence
            program and funded by the Northern Territory Government.{' '}
          </TextBody>
          <TextBody>
            Indigimob supported a team of senior artists and digital mentors to
            work with the young people to realise their ideas. Leigh Harris and
            Ingeous Studios developed this app. We also thank the generous
            support of the Johnston Foundation.
          </TextBody>
          <TextBody>
            Emoji advisors: Veronica Dobson Perrurle, Kathleen Wallace Kemarre,
            Joel Liddle Perrurle and Amelia Turner
          </TextBody>
          <TextBody>Producer: Caddie Brain</TextBody>
          <TextBody>
            Senior artists: Dave Webb, Graham Wilfred, Phillip McCormack, Emma
            Stubbs, Wyona Palmer, Lindsey Matthews, John Lewis, Benita Clements,
            Ricky Connick Jakamara, Elizabeth Oolodoodi, Dion Beasley and Elliat
            Rich
          </TextBody>
          <TextBody>
            Featured young emoji artists: Chris, Kaylene, Cherina, Vicprsha,
            Ishmale, Elizabeth, Coulthard, Joyanne, Mia, Megan, Ashley, Jessie,
            Tjikiti, Lilah, Ellis, Broadie, Shinarah, Astrid, Abraham, Denzel,
            Tarynt, Sebastian, Kelvin, Ernestine, Dustin, Lucas, Reshanna,
            Natasha, Mitchell, Vanessa, Alba, Aisha, Felicity
          </TextBody>
          <TextBody>
            Youth team: Matt D’Penguin, Alice Goddard, Else Kennedy, Pathi Raj
            and Lindsey Matthews
          </TextBody>
          <TextBody>
            Full credits on the{' '}
            <Link url="http://www.indigemoji.com.au/">Indigemoji website</Link>.
          </TextBody>
          <View style={{height: 50}}></View>
        </ScrollView>
      </Layout>
    );
  }
}

