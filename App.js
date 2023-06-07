import React, {useEffect} from 'react';
import {AuthProvider} from './src/Authentication/AuthProvider';
import Navigator from './src/controllers/Navigator';
import 'react-native-gesture-handler';
import WelcomeScreen from './src/screens/Login_Screen/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import EventsCard from './src/components/EventsCard';
import ManageEventCard from './src/components/ManageEventCard';
import AdminManage from './src/screens/AdminScreens/AdminManage';



const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
  });
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
    // <AdminManage/>

  );
};

export default App;
