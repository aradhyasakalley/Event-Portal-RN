import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import ManageEventCard from '../../components/ManageEventCard';
import { PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AdminManage = () => {
  const navigation = useNavigation();
  const onCreateEventPressed =() =>{
    navigation.navigate('CreateEvent')
  }
  return (
    <View style={styles.main}>
      <ManageEventCard />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onCreateEventPressed} style={styles.button}>
          <Text style={styles.buttonText}>Create New Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminManage;

const styles = StyleSheet.create({
  main: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: PixelRatio.getFontScale() * 10,
  },
});
