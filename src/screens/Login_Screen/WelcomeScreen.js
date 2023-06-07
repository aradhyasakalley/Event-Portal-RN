import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const onSignInPressed = () => {
        navigation.navigate('Login')
    }
    const onCreateNewPressed = () => {
        navigation.navigate('RoleChoice')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Welcome !</Text>
      <Text style={styles.text}>Sign in or create a new account</Text>
      <Image style={styles.image} source={require('../../images/welcome.png')} />
      <TouchableOpacity onPress={onSignInPressed} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCreateNewPressed} style={styles.button2}>
        <Text style={styles.textmain}>No account yet?</Text>
        <Text style={styles.textlink}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:320,
    height:248,
    marginTop:74.72,
    marginBottom:110
  },
  text: {
    color: '#7C7C7C',
    fontSize: 16,
  },
  headertext: {
    color: 'black',
    fontSize: 32,
    fontWeight:'bold',
    marginBottom:9.87
  },
  animationContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:60,marginTop:40
  },
  animation: {
    width: 300,
    height: 300,
  },
  button: {
    borderColor: 'black',
    backgroundColor: '#CE7777',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    width: 320,
    height: 66,
    marginBottom:11
  },
  button2: {
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
    margin: 10,
    width: 320,
    height: 66,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    color: 'black',
    fontSize: 16,
  },
   textmain: {
    color: 'black',
    fontSize : 16
  },
  textlink: {
    color: '#CE7777',
    fontSize : 16
  },
});