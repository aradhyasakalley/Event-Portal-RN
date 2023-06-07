import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const EventCard = ({image, title, date, onPressView, onPressShare}) => {
  const navigation = useNavigation();
  const onViewPresed = () => {
      navigation.navigate('UserEventView');
  } 
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageStack}>
          <Image
            source={require('../images/events.jpg')}
            resizeMode="contain"
            style={styles.image}></Image>
          <View style={styles.rect2}>
            <View style={styles.textInput2StackStackRow}>
              <View style={styles.textInput2StackStack}>
                <View style={styles.textInput2Stack}>
                  <Text style={styles.textInput2}>Hackprep 4.0</Text>
                  <Text placeholder="19/06/2023" style={styles.textInput3}>
                    19/06/2023
                  </Text>
                </View>
                <Ionicons name="calendar" style={styles.icon2}></Ionicons>
              </View>
              <TouchableOpacity onPress={onViewPresed}style={styles.button}>
                <Text style={styles.textInput}>View</Text>
              </TouchableOpacity>
              <Ionicons name="share-social" style={styles.icon}></Ionicons>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 0,
    // alignItems:'center',
    // marginLeft:13
  },
  rect: {
   
    width: 338,
    height: 184,
    backgroundColor: '#2b3a55',
    borderRadius: 10,
    shadowColor: 'rgba(12,18,25,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    // marginTop: 49,
    // marginLeft: 16,
  },
  image: {
    top: 0,
    width: 338,
    height: 139,
    position: 'absolute',
    left: 0,
    borderRadius: 4,
    // backgroundColor:'red'
   
  },
  rect2: {
    top: 120,
    left: 0,
    width: 338,
    height: 63,
    position: 'absolute',
    backgroundColor: '#2b3a55',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textInput2: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'white',
    height: 22,
    width: 125,
    fontSize:15
  },
  textInput3: {
    top: 21,
    left: 16,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'white',
    height: 15,
    width: 76,
    fontSize: 10,
  },
  textInput2Stack: {
    top: 0,
    left: 0,
    width: 125,
    height: 36,
    position: 'absolute',
  },
  icon2: {
    top: 22,
    left: 0,
    position: 'absolute',
    color: 'rgba(128,128,128,1)',
    fontSize: 12,
    height: 12,
    width: 11,
  },
  textInput2StackStack: {
    width: 125,
    height: 36,
  },
  button: {
    width: 60,
    height: 28,
    backgroundColor: 'rgba(51,67,97,1)',
    borderRadius: 8,
    shadowColor: 'rgba(39,23,23,1)',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 88,
    marginTop: 8,
  },
  textInput: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    height: 22,
    width: 34,
    marginTop: 3,
    marginLeft: 13,
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 21,
    height: 24,
    width: 21,
    marginLeft: 11,
    marginTop: 10,
  },
  textInput2StackStackRow: {
    height: 36,
    flexDirection: 'row',
    flex: 1,
    marginRight: 19,
    marginLeft: 14,
    marginTop: 11,
  },
  imageStack: {
    width: 338,
    height: 183,
  },
});

export default EventCard;
