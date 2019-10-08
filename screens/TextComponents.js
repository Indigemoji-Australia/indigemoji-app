import React from 'react';
import {Linking, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TextBody = props => <Text style={styles.body}>{props.children}</Text>;

const TextTitle = props => <Text style={styles.title}>{props.children}</Text>;

const TextStrong = props => <Text style={styles.strong}>{props.children}</Text>;

const Link = props => (
  <Text style={styles.link} onPress={() => Linking.openURL(props.url)}>
    {props.children}
  </Text>
);

const margin = 10;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: margin,
    marginBottom: margin,
  },
  body: {fontSize: 15, marginBottom: margin, marginTop: margin},
  strong: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: margin,
    marginTop: margin,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export {Link, TextBody, TextTitle, TextStrong};
