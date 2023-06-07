/* Text field for sign in/sign up page */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {backDropColor, subtextColor, width} from '../../Constants';

const TextField = (props) => {
  return (
    <TextInput
      style={styles.textinput}
      placeholder={props.title}
      placeholderTextColor="gray"
      textAlign="left"
      onChangeText={props.function}
    />
  );
};

const styles = StyleSheet.create({
  textinput: {
    fontFamily: 'OpenSans-Regular',
    backgroundColor: 'white',
    height: 56,
    width: width * 0.81,
    borderRadius: 10,
    borderColor:'#ebe7e7',
    fontSize: 15,
    paddingLeft: 22,
    color: subtextColor,
  },
});

export default TextField;
