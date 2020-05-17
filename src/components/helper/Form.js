import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {validateEmail, validatePassword} from './validation';
import ErrorText from './ErrorText';
import AsyncStorage from '@react-native-community/async-storage';
const Logo = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [show_email_label, setShowEmailLabel] = useState(false);
  const [show_email_error, setShowEmailError] = useState(false);

  const [email_error_text, setEmailErrorText] = useState('Email is incorrect');
  const [show_password_label, setShowPasswordLabel] = useState(false);
  const [show_password_error, setShowPasswordError] = useState(false);
  const [password_error_text, setPasswordErrorText] = useState(
    'Password is incorrect',
  );
  const [confirm_password_error_text, setConfirmPasswordErroText] = useState(
    'Password did not match',
  );
  const [show_confirm_password_label, setShowConfirmPasswordLabel] = useState(
    false,
  );
  const [show_confirm_password_error, setShowConfirmPasswordError] = useState(
    false,
  );

  const handleConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (text.trim().length < 1) {
      setShowConfirmPasswordLabel(false);
      setShowConfirmPasswordError(false);
    } else {
      if (text.trim() !== password) {
        setShowConfirmPasswordError(true);
      } else {
        setShowConfirmPasswordError(false);
      }
      setShowConfirmPasswordLabel(true);
    }
  };
  const handlePassword = (text) => {
    setPassword(text);
    if (text.trim().length < 1) {
      setShowPasswordLabel(false);
      setShowPasswordError(false);
    } else {
      validate_password(text);
      setShowEmailLabel(true);
    }
  };
  const validate_password = (_password) => {
    var valid = validatePassword(_password);
    setShowPasswordError(!valid);
    setPasswordErrorText('Password is incorrect');
  };
  const validate_email = (_email) => {
    var valid = validateEmail(_email);
    setShowEmailError(!valid);
  };
  const handleEmail = (text) => {
    setEmail(text);
    if (text.trim().length < 1) {
      setShowEmailLabel(false);
      setShowEmailError(false);
    } else {
      validate_email(text);
      setShowEmailLabel(true);
    }
  };
  const submitSignUP = () => {
    if (email.trim() < 1) {
      setShowEmailError(true);
      setEmailErrorText('Please enter email');
      return;
    }
    if (password.trim() < 1) {
      setShowPasswordError(true);
      setPasswordErrorText('Please enter password');
      return;
    }
    if (props.type === 'Signup' && confirm_password.trim() < 1) {
      setShowConfirmPasswordError(true);
      setConfirmPasswordErroText('Please confirm password');
      return;
    }
    if (props.type === 'Signup') {
      let user = {
        stored_email: email,
        stored_password: password,
      };
      console.log('userrrr', user, email, password);
      console.log('user parsed', JSON.stringify(user));

      AsyncStorage.setItem('user_info', JSON.stringify(user));
      props.goBack();
    } else if (props.type === 'Sign in') {
      AsyncStorage.getItem().then((user) => {
        console.log('userrrrrrr.userrrr', user);
      });
    }
  };
  const submitLogin = () => {
    if (email.trim() < 1) {
      setShowEmailError(true);
      setEmailErrorText('Please enter email');
      return;
    }
    if (password.trim() < 1) {
      setShowPasswordError(true);
      setPasswordErrorText('Please enter password');
      return;
    }
    AsyncStorage.getItem('user_info').then((user) => {
      if (user) {
        let {stored_email, stored_password} = JSON.parse(user);
        if (email === stored_email && password === stored_password) {
          Alert.alert('Login Successful');
        }
      } else {
        Alert.alert('Email or Password is incorrect');
      }
    });
  };
  return (
    <View style={styles.container}>
      {show_email_label && <Text style={styles.Label}>Email</Text>}

      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#bbb"
        onChangeText={(text) => handleEmail(text)}
        selectionColor="#fff"
        keyboardType="email-address"
        value={email}
        onSubmitEditing={() => password.focus()}
      />
      {show_email_error && (
        <ErrorText
          error_text={email_error_text}
          text_styles={styles.emailErrorText}
        />
      )}
      {show_password_label && <Text style={styles.Label}>Password</Text>}
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="transparent"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => handlePassword(text)}
        placeholderTextColor="#bbb"
        value={password}
      />
      {show_password_error && (
        <ErrorText
          error_text={password_error_text}
          text_styles={styles.emailErrorText}
        />
      )}

      {props.type === 'Signup' && (
        <>
          {show_confirm_password_label && (
            <Text style={styles.Label}>Confirm Password</Text>
          )}
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="transparent"
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(text) => handleConfirmPassword(text)}
            placeholderTextColor="#bbb"
            value={confirm_password}
          />
          {show_confirm_password_error && (
            <ErrorText
              error_text={confirm_password_error_text}
              text_styles={styles.emailErrorText}
            />
          )}
        </>
      )}
      <LinearGradient
        start={{x: 0.0, y: 0.5}}
        end={{x: 1.0, y: 0.5}}
        colors={['#83acf7', '#a774fa']}
        style={styles.gradient}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.type === 'Signup' ? submitSignUP() : submitLogin();
          }}>
          <Text style={styles.buttonText}>{props.type}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputBox: {
    width: 300,
    borderBottomWidth: 0.5,
    borderBottomColor: '#83acf7',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    paddingBottom: 2,
    color: '#ffffff',
    marginVertical: 10,
  },
  gradient: {
    borderRadius: 25,
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 13,

    borderColor: 'transparent',
  },
  button: {
    width: 300,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  Label: {
    paddingHorizontal: 16,
    paddingTop: 8,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'flex-start',
    color: '#fff',
    elevation: 8,
  },
  emailErrorText: {
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-SemiBold',
    color: 'orange',
    fontSize: 11,
    paddingHorizontal: 16,
  },
});
export default Logo;
