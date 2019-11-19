import React from 'react';
import {Linking, Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const TextBody = props => <Text style={styles.body}>{props.children}</Text>;

const TextTitle = props => <Text style={styles.title}>{props.children}</Text>;

const TextStrong = props => <Text style={styles.strong}>{props.children}</Text>;

const TextWrapper = props => (
  <View style={styles.wrapper}>{props.children}</View>
);

const Link = props => (
  <Text style={styles.link} onPress={() => Linking.openURL(props.url)}>
    {props.children}
  </Text>
);

const margin = 10;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'ArialRoundedBold',
    fontSize: 30,
    marginTop: margin,
    marginBottom: margin,
  },
  body: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 15,
    marginBottom: margin,
    marginTop: margin
  },
  strong: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 15,
    marginBottom: margin,
    marginTop: margin,
  },
  link: {
    textDecorationLine: 'underline',
  },
  wrapper: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
});

export {Link, TextBody, TextTitle, TextStrong, TextWrapper};
