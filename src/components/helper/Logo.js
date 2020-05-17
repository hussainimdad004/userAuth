import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Logo = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../images/logo.png')} />
      <Text style={styles.logoText}>{props.title}</Text>
      <Text style={styles.sloganText}>{props.slogan}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginTop: 18,
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  sloganText: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
  },
  image: {
    width: 70,
    height: 70,
  },
});
export default Logo;
