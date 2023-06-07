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
import UserEventView from '../screens/UserScreens.js/UserEventView';


const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LikedStack = createStackNavigator();

const UserTabNavigator = () => {
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
              name={focused ? 'ios-home' : 'ios-home-outline'}
              color={textColor}
              size={26}
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
              name={focused ? 'md-search-sharp' : 'md-search-outline'}
              color={textColor}
              size={27}
            />
          ),
        }}
      />

<BottomTab.Screen
        name="Like"
        component={LikedStackScreen}
        options={{
          tabBarColor: statusbarColor,
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'ios-heart-sharp' : 'ios-heart-outline'}
              color={textColor}
              size={27}
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
      <HomeStack.Screen name="Home" component={UserHome} />
      <HomeStack.Screen name="UserEventView" component={UserEventView} />
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
      <SearchStack.Screen name="Search" component={UserSearch} />
      <SearchStack.Screen name="Committee" component={Committee} />
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
      <ProfileStack.Screen name="Profile" component={UserProfile} />
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

export default UserTabNavigator;
