import React from 'react';
import {Text} from 'react-native';
const ErrorText = ({error_text, text_styles}) => (
  <Text style={text_styles ? text_styles : styles.text}>{error_text}</Text>
);

const styles = {
  text: {
    color: 'orange',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    marginTop: 6,
  },
};

export default ErrorText;
