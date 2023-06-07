import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PixelRatio } from 'react-native';
const ProfileScreen = () => {
  return (
    <View style={styles.headercontainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../images/profile.jpg')}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Icon name="pencil" style={styles.icon} size={18} color={'#BFB2B2'} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  editButton: {
    position: 'absolute',
    bottom: PixelRatio.getFontScale() * 350,
    right: PixelRatio.getFontScale() * 130,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  editButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    borderColor: 'black',
    backgroundColor: '#BFB2B2',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    width: 320,
    height: 66,
    marginBottom: 11,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: PixelRatio.getFontScale() * 30,
  },
});

export default ProfileScreen;
