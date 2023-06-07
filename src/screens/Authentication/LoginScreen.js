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
import {Switch} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {width} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';
const LoginScreen = () => {
  const {signIn} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      <Ionicons
        name="arrow-back"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.header}>Welcome Back !</Text>

      {/* textfields */}
      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>SAPID</Text>
        <TextField title={'Sap id'} function={handleUser} />
      </View>
      <View style={styles.textfieldContainer}>
        <Text style={styles.textfieldHeader}>Password</Text>
        <Password title={'Your Password'} function={handlePassword} />
      </View>

      <View style={styles.bottomBar}>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <Text style={styles.text}>Remember me</Text>
        <View style={styles.forgot}>
          <TouchableOpacity style={styles.text}>
            <Text style={styles.text}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={signInPressed} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backButton: {
    color: 'black',
    fontSize: PixelRatio.getFontScale() * 24,
    alignSelf: 'flex-start',
    marginTop: PixelRatio.getFontScale() * 40,
    marginLeft: PixelRatio.getFontScale() * 20,
  },
  forgot: {
    paddingLeft: PixelRatio.getFontScale() * 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: PixelRatio.getFontScale() * 30,
    marginBottom: PixelRatio.getFontScale() * 50,
    marginLeft: PixelRatio.getFontScale() * 35,
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
});
