import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {statusbarColor, textColor} from '../Constants';
import {HomePage} from '../screens/HomePage3/HomePage';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import Committee from '../screens/Committeescreen/CommitteeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import EventsScreen from '../screens/HomePage3/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen/Profile';
import ReferralCount from '../screens/ProfileScreen/ReferralCount';
import AssignTask from '../screens/ProfileScreen/AssignTask';
import ViewTask from '../screens/ProfileScreen/ViewTask';
import UserHome from '../screens/UserScreens.js/UserHome';
import UserSearch from '../screens/UserScreens.js/UserSearch';
import UserLiked from '../screens/UserScreens.js/UserLiked';
import UserProfile from '../screens/UserScreens.js/UserProfile';
import AdminHome from '../screens/AdminScreens/AdminHome';
import AdminManage from '../screens/AdminScreens/AdminManage';
import AdminProfile from '../screens/AdminScreens/AdminProfile';
import CreateEventScreen from '../screens/AdminScreens/CreateEventScreen';


const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LikedStack = createStackNavigator();

const AdminTabNavigator = () => {
  const BottomTab = createMaterialBottomTabNavigator();
  return (
    <BottomTab.Navigator
      labeled={false}
      shifting={true}
      tabBarOptions={{
        style: {height: 50},
      }}
      initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={textColor}
              size={23}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'settings' : 'settings-outline'}
              color={textColor}
              size={23}
            />
          ),
        }}
      />


      
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              color={textColor}
              size={26}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={AdminHome} />
      <HomeStack.Screen name="Event" component={EventsScreen} />
    </HomeStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="Search" component={AdminManage} />
      <SearchStack.Screen name="CreateEvent" component={CreateEventScreen} />
    </SearchStack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={AdminProfile} />
      <ProfileStack.Screen name="ReferralCount" component={ReferralCount} /> 
      <ProfileStack.Screen name="AssignTask" component={AssignTask} />
      <ProfileStack.Screen name="ViewTask" component={ViewTask} />
    </ProfileStack.Navigator>
  );
};

const LikedStackScreen = () => {
    return (
      <ProfileStack.Navigator
        initialRouteName="Like"
        screenOptions={{
          headerShown: false,
        }}>
        <LikedStack.Screen name="Like" component={UserLiked} />
      </ProfileStack.Navigator>
    );
  };

export default AdminTabNavigator;
