import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {TextBody, TextTitle, Link, TextStrong} from './TextComponents';
import Layout from './Layout';

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <ScrollView style={{flex: 1, padding: 30, marginBottom: 30}}>
          <TextTitle>About</TextTitle>
          <TextBody>
            <TextStrong>
              Emoji itne-areye Australia mpwepe-arenye. itne ayeye
              anwerne-akerte, altyerre-akerte, angkentye akerte uthene. Arrernte
              angkentye anwernekenhe impene anthurre, altyerrenge.
              Australian-mpwepe angkentye atningke akerte kenhe Arrernte
              Mparntwe-arenye kwenhe. Marle, urreye, arelhe,
              artwe-areye-uthene-arle emoji-kenhe arlkenye intelheleke
              uterne-ureke. Emoji arrpe-anenhe arritnye Arrernte-kenhe-akerte,
              anwerne ahentye arrantherre itnenhe akaltye-irretyeke. Anwerne
              internet-nge itnenhe arrerneke kele angkentye anwernekenhe
              rlterrke-aneme-akwete.
            </TextStrong>
          </TextBody>

          <TextBody>
            This emoji sticker set represents life, culture and language in
            Central Australia. Arrernte is our ancient language, one of many
            around here, and we’re making emojis to share it online. They were
            made by young people, artists and cultural advisors. Each emoji has
            an Arrernte name we hope you’ll learn. We want to use the internet
            to keep our language strong.
          </TextBody>

          <TextBody>
            The designs were developed through eight weeks of workshops at the
            Alice Springs Public Library over December 2018 and January 2019 as
            part of the Geek in Residence Program. These digital art workshops
            ran all day, seven days a week, with over 1000 participants from
            Mparntwe/Alice Springs as well as many remote communities. These
            young designers were supported by a team of local Indigenous artists
            and Arrernte linguists to help them realise their ideas. We’re
            combining one of the world’s most ancient languages with one of the
            newest and fastest growing languages, emoji. It’s just one way of
            sharing our culture online and contributing to the decolonisation of
            the internet for our young people. We hope you like them!
          </TextBody>
          <TextBody>
            Read the full story on the <Link url="http://www.indigemoji.com.au/">Indigemoji website</Link>.
          </TextBody>
          <View style={{height: 50}}></View>
        </ScrollView>
      </Layout>
    );
  }
}
