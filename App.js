import React, {useEffect} from 'react';
import {AuthProvider} from './src/Authentication/AuthProvider';
import Navigator from './src/controllers/Navigator';
import 'react-native-gesture-handler';
import WelcomeScreen from './src/screens/Login_Screen/WelcomeScreen';

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
  });
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
    
  );
};

export default App;
