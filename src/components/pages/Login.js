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

const Login = (props) => {
  const signup = () => {
    Actions.signup();
  };
  return (
    <ImageBackground
      source={require('../../images/background.jpg')}
      style={styles.container}>
      <Logo title={props.title} slogan={'Happy to see you again!'} />
      <Form type="Sign in" />
      <Text style={styles.forgetPassword}>Forget password?</Text>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={signup}>
          <Text style={styles.signupButton}> Sign up here</Text>
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  signupButton: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    fontWeight: '500',
  },
  forgetPassword: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
});
export default Login;
