import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import { PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RoleChoice = () => {
    const navigation=useNavigation();
    const onStudentPressed =() =>{
        navigation.navigate('SignUp')
    }
    const onAdmiNPressed =() =>{
        navigation.navigate()
    }
  return (
    <View style={styles.main}>
      <Text>what role defines you best?</Text>
      <TouchableOpacity onPress={onStudentPressed}  style={styles.button}>
        <Text style={styles.buttonText}>Student</Text>
        
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button2}>
        <Text style={styles.textmain}>Admin</Text>
       
      </TouchableOpacity>
    </View>
  );
};

export default RoleChoice;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    borderColor: 'black',
    backgroundColor: '#CE7777',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    width: 220,
    height: 220,
    marginBottom:11
  },
  button2: {
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
    margin: 10,
    width: 220,
    height: 220,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  buttonText: {
    color: 'white',
    fontSize: 40,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginTop: PixelRatio.getFontScale() * 60
  },
  buttonText2: {
    color: 'black',
    fontSize: 16,
  },
   textmain: {
    color: 'black',
    fontSize : 40,
    marginTop: PixelRatio.getFontScale() * 60
  },
  textlink: {
    color: '#CE7777',
    fontSize : 16
  },
});
