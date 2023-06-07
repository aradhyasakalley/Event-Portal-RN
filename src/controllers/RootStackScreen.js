import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login_Screen/LoginScreen';
import SignUp from '../screens/SignUp_Screen/SignUpScreen';
import ForgotPasswordScreen from '../screens/Login_Screen/ForgotPasswordScreen';
import OTPScreen from '../screens/Login_Screen/OTPScreen';
import NewPassword from '../screens/Login_Screen/NewPassword';
import WelcomeScreen from '../screens/Login_Screen/WelcomeScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import CreateAccountAcreen from '../screens/Authentication/CreateAccountScreen'
import RoleChoice from '../screens/Authentication/RoleChoice';
const RootStackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={CreateAccountAcreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OtpScreen" component={OTPScreen} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="RoleChoice" component={RoleChoice} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
