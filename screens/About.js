import React from 'react';
import {ScrollView, Text} from 'react-native';
import Layout from './Layout';

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <ScrollView style={{flex: 1}}>
          <Text>About</Text>
        </ScrollView>
      </Layout>
    );
  }
}
