import React from 'react';
import {Text, Modal, SafeAreaView, ScrollView, View} from 'react-native';
import {
  TextBody,
  TextTitle,
  Link,
  TextStrong,
  TextWrapper,
} from './TextComponents';
import Layout from './Layout';
import Intro from './Intro';

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIntro: false,
    };
  }

  hideIntro = () => {
    this.setState({showIntro: false});
  };

  showIntro = () => {
    this.setState({showIntro: true});
  };

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <TextWrapper>
          <ScrollView style={{flex: 1}}>
            <TextTitle>Emoji-akerte / About</TextTitle>
            <TextBody>
              <TextStrong>
                Emoji itne-areye Australia mpwepe-arenye. itne ayeye
                anwerne-akerte, altyerre-akerte, angkentye akerte uthene.
                Arrernte angkentye anwernekenhe impene anthurre, altyerrenge.
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
              This emoji sticker set represents life, culture and language on
              Arrernte Country in Central Australia. Each design was developed
              during seven weeks of workshops held at the Alice Springs Public
              Library over the summer school holidays of 2018 as part of the
              Geek in Residence program. These digital art workshops ran all
              day, seven days a week, with over 1000 participants from
              Mparntwe/Alice Springs as well as from many remote communities.
              These young designers were supported by a team of senior
              Indigenous artists, Digital Mentors and Arrernte linguists to help
              them realise their ideas.
            </TextBody>

            <TextBody>
              Each emoji has an Arrernte name, the ancient language of our
              place, that we hope you’ll learn. It’s just one way of sharing our
              culture online and contributing to the decolonisation of the
              internet for our young people. We hope we can use the internet to
              keep our language strong.
            </TextBody>
            <TextBody>
              <Text
                style={{textDecorationLine: 'underline'}}
                onPress={this.showIntro}>
                View the welcome screens.
              </Text>
            </TextBody>
            <TextBody>
              Read more about the emojis on the{' '}
              <Link url="http://www.indigemoji.com.au/">
                Indigemoji website
              </Link>
              .
            </TextBody>
            <View style={{height: 50}}></View>
          </ScrollView>
        </TextWrapper>
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
