import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PixelRatio} from 'react-native';
import {heightToDp, widthToDp} from '../../Responsive';
import TextField from '../../components/SignUpLogin/TextField';
import Password from '../../components/SignUpLogin/PasswordTextBox';
import {Switch, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {width} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateEventScreen = () => {
  const {signIn} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = (date) => {
//     console.warn('A date has been picked: ', date);
//     hideDatePicker();
//   };

//   const showTimePicker = () => {
//     setTimePickerVisibility(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisibility(false);
//   };

//   const handleTimeConfirm = (date) => {
//     console.warn('A time has been picked: ', date);
//     hideTimePicker();
//   };

  const signInPressed = () => {
    signIn(username, password);
  };
  const handleUser = (text) => {
    setUsername(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const navigation = useNavigation();
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <ScrollView>
      {/* header */}
      <View style={styles.headertop}>
        <Ionicons
          name="arrow-back"
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>Event Details</Text>
      </View>

      {/* textfields */}
      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>Event Name</Text>
        <TextField title={'Enter the event title'} function={handleUser} />
      </View>
      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>About the event</Text>
        <TextField title={'Event description'} function={handleUser} />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
        //   onPress={showDatePicker}
          style={styles.button2}>
          <View style={styles.buttonRowPicker}>
            <Text style={styles.buttonText2}>Select Date</Text>
            <Ionicons
              name="calendar"
              style={styles.iconbutton}
              
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={showTimePicker}
          style={styles.button2}>
          <View style={styles.buttonRowPicker}>
            <Text style={styles.buttonText2}>Select time</Text>
            <Ionicons
              name="ios-time"
              style={styles.iconbutton}
              
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>Add Photos/Videos</Text>
        <TextField title={'Upload photos and videos'} function={handleUser} />
      </View>
      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>Registration Link</Text>
        <TextField
          title={'Paste the url for the registration page'}
          function={handleUser}
        />
      </View>
      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>Maximum Participants</Text>
        <TextField title={'*only if limited entry'} function={handleUser} />
      </View>
      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>Other information</Text>
        <TextField
          title={'Additional information about the event'}
          function={handleUser}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={signInPressed} style={styles.button}>
          <Text style={styles.buttonText}>Create Event</Text>
        </TouchableOpacity>
      </View>

      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      /> */}
    </ScrollView>
  );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
  backButton: {
    color: 'black',
    fontSize: PixelRatio.getFontScale() * 24,
    alignSelf: 'flex-start',
    marginTop: PixelRatio.getFontScale() * 40,
    marginLeft: PixelRatio.getFontScale() * 20,
  },
  datetimerow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: PixelRatio.getFontScale() * 19,
  },
  buttonRowPicker: {
    flexDirection: 'row',
  },
  textinput: {
    width: PixelRatio.getFontScale() * 135,
    height: 56,
    borderRadius: 10,
    borderColor: '#ebe7e7',
    fontSize: 16,
    backgroundColor: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  forgot: {
    paddingLeft: PixelRatio.getFontScale() * 16,
  },
  headertop: {
    flexDirection: 'row',
  },
  iconbutton: {
    color: 'black',
    fontSize: PixelRatio.getFontScale() * 24,
    alignSelf: 'flex-start',
    marginTop: PixelRatio.getFontScale() * -3,
    marginLeft: PixelRatio.getFontScale() * 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: PixelRatio.getFontScale() * 36,
    marginBottom: PixelRatio.getFontScale() * 50,
    marginLeft: PixelRatio.getFontScale() * 20,
  },
  textfieldContainer: {
    alignItems: 'center',
    marginBottom: PixelRatio.getFontScale() * 30,
  },
  textfieldHeader: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: PixelRatio.getFontScale() * 38,
    marginBottom: PixelRatio.getFontScale() * 10,
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
  bottomBar: {
    flexDirection: 'row',
    marginLeft: PixelRatio.getFontScale() * 35,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 14,
    color: '#120D26',
    marginLeft: PixelRatio.getFontScale() * 9.7,
  },
  button2: {
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    width: 150,
    height: 56,
    marginBottom: 11,
  },
  buttonText2: {
    color: 'gray',
    fontSize: 14,
  },
});
