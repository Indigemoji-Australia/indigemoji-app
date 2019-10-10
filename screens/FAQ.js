import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {
  TextWrapper,
  TextBody,
  TextTitle,
  Link,
  TextStrong,
} from './TextComponents';
import Layout from './Layout';

export default class FAQScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <TextWrapper>
          <ScrollView style={{flex: 1}}>
            <TextTitle>FAQ</TextTitle>
            <TextBody>
              <TextStrong>How do I use Indigemoji stickers?</TextStrong>
            </TextBody>
            <TextBody>
              Firstly, find some WiFi and download the Indigemoji app from the
              App Store or Google Play. You can now look through the stickers
              and share them to text messages, WhatsApp, Messenger or social
              media platforms. On Apple platforms they also function as a
              sticker pack, allowing for better integration onto your phone.
              Because they are stickers, they can’t be used in-line with text on
              social media platforms - instead they will behave more like
              images.
            </TextBody>
            <TextBody>
              <TextStrong>
                Why don’t they behave exactly like normal emojis?
              </TextStrong>
            </TextBody>
            <TextBody>
              Emojis were originally developed in Japan before being adopted,
              expanded and used around the world. The official emoji set is now
              controlled by Unicode, an international consortium that approves
              and manages what emojis are adopted into the official set. To get
              a new emoji adopted into the official set, you need to go through
              an extensive application process, a process which recently
              rejected a key symbol of Aboriginal Australia, the Aboriginal
              Flag. Therefore we’ve made our own sticker set to reflect our own
              language and culture.
            </TextBody>
            <TextBody>
              <TextStrong>How were the stickers made?</TextStrong>
            </TextBody>
            <TextBody>
              The concepts and artworks were made during eight weeks of free
              digital art workshops at the Alice Springs Public Library,
              overseen by a group of senior Arrernte advisors. The workshops ran
              all day every day of the summer 2018-2019 school holidays with a
              team of youth workers and Indigenous artists. We also worked with
              local art centres and other Indigenous organisations to make
              certain emojis. All artists and advisors were paid for their time
              and contribution. We then worked with a graphic designer to help
              us polish our final designs, learning some higher-level graphic
              design skills along the way. The app was made by Ingeous Studios
              in Cairns, an Indigenous-owned and run technology and design
              company. It was funded by Indigimob and the Northern Territory
              Government. See full credits for the project here.
            </TextBody>
            <TextBody>
              <TextStrong>What language are the emojis in?</TextStrong>
            </TextBody>
            <TextBody>
              There are many different dialects of Arrernte spoken today. The
              language of the emoji set is Eastern and Central Arrernte spoken
              around Mparntwe/Alice Springs, Amoonguna, Ltyentye Apurte/Santa
              Teresa and Titjikala.
            </TextBody>
            <TextBody>
              <TextStrong>Why did we make them?</TextStrong>
            </TextBody>
            <TextBody>
              Our aim is to share a slice of Arrernte culture with the world and
              increase our representation on digital platforms. Each emoji has
              been carefully thought through, developed and approved by a group
              of senior Arrernte advisors and other community members. We want
              our kids to feel that their language and culture is relevant and
              that they have opportunities in this new digital world.
            </TextBody>
            <TextBody>
              <TextStrong>
                Why aren’t there any stickers relating to the sea or other parts
                of Australia?
              </TextStrong>
            </TextBody>
            <TextBody>
              These stickers were made with young people, artists and linguists
              on Arrernte country in Central Australia. They predominantly
              relate to Arrernte life and culture. We would not presume to
              represent the cultural content of other communities. We would love
              to share everything we’ve learnt and help others make their own
              emoji stickers! If that’s you, just get in touch!
            </TextBody>
            <TextBody>
              <TextStrong>Who is Indigemoji?</TextStrong>
            </TextBody>
            <TextBody>
              Indigemoji is a collaborative team that worked together to produce
              this app. The copyright for the artwork and cultural knowledge
              remains with each individual artist involved. They have licensed
              the use of their work to be included and shared through the
              Indigemoji app.
            </TextBody>
            <TextStrong>
              I want to suggest an Indigemoji or make a set for my mob!
            </TextStrong>
            <TextBody>
              Great! This is just the beginning. There are so many more we could
              make! We're keen to help any way we can and share what we've
              learnt. Send us an email at werte@indigemoji.com.au
            </TextBody>
            <TextBody>
              <TextStrong>I want to help out!</TextStrong>
            </TextBody>
            <TextBody>
              There’s so much we want to do next, like animating the stickers so
              they move! If you’d like to donate to the project we’d love to
              hear from you. You can also buy an (actual real!) adhesive sticker
              pack for your laptop or anywhere else. Every dollar will be
              reinvested back into the project - to maintain the app, develop
              more emoji stickers, run more workshops with young people and
              develop the next stages of the project.
            </TextBody>
            <TextBody>
              <TextStrong>I’m having technical issues!</TextStrong>
            </TextBody>
            <TextBody>
              Sorry to hear that - get in touch with us at{' '}
              <Link url="mailto:werte@indigemoji.com.au">
                werte@indigemoji.com.au
              </Link>{' '}
              and we’ll try and help!
            </TextBody>
            <View style={{height: 50}}></View>
          </ScrollView>
        </TextWrapper>
      </Layout>
    );
  }
}
