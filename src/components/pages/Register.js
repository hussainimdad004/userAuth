import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Logo from '../helper/Logo';
import Form from '../helper/Form';

import {Actions} from 'react-native-router-flux';

const Signup = (props) => {
  const goBack = () => {
    Actions.pop();
  };
  return (
    <ImageBackground
    source={require('../../images/background.jpg')}
    style={styles.container}>
      <Logo
        title={props.title}
        slogan={'You and your Friends always Connected!'}
      />
      <Form type="Signup" goBack={goBack} />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.signupButton}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 32,
    flexDirection: 'row',
  },
  signupText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  signupButton: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    fontWeight: '500',
  },
});
export default Signup;
