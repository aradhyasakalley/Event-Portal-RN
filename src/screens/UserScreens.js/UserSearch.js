// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import SearchBar from '../../components/SearchBar';
// import {PixelRatio} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';
// const UserSearch = () => {
//   const navigation = useNavigation();
//   const [searchedData, setSearchedData] = useState(null);
//   return (
//     <View style={styles.main}>
//       <View style={styles.iconRow}>
//         <Ionicons
//           name="arrow-back"
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         />
//         <SearchBar
//           title={'Search for an event'}
//           type={'event'}
//           callback={setSearchedData}
//         />
//       </View>
//     </View>
//   );
// };

// export default UserSearch;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   searchForEventsStack: {
//     width: 344,
//     height: 47,
//     marginTop: 53,
//     marginLeft: 16,
//   },
//   icon: {
//     color: 'rgba(128,128,128,1)',
//     fontSize: 32,
//     marginTop: 3,
//   },
//   rect: {
//     width: 303,
//     height: 41,
//     backgroundColor: '#E6E6E6',
//     marginLeft: 15,
//   },
//   iconRow: {
//     height: 41,
//     flexDirection: 'row',
//     flex: 1,
//     marginRight: 19,
//     marginLeft: 17,
//     marginTop: 45,
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../../components/SearchBar'
import { PixelRatio } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import EventCard from '../../components/EventsCard';
const UserSearch = () => {
  const navigation = useNavigation();
  const [searchedData, setSearchedData] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon
          name='arrow-back'
          style={styles.icon}
          onPress={()=>navigation.goBack()}
        />
        <SearchBar
          title={'Search for an event'}
          type={'event'}
          callback={setSearchedData}
        />
        
        <View style={styles.rect}></View>
      
      </View>
      
    </View>
  )
}

export default UserSearch

const styles = StyleSheet.create({
  main:{
    flex: 1,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
    padding: PixelRatio.getPixelSizeForLayoutSize(3)
  },
  searchForEventsStack: {
    width: 344,
    height: 47,
    marginTop: 53,
    marginLeft: 16
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 32,
    marginTop: 3
  },
  rect: {
    width: 303,
    height: 41,
    backgroundColor: "#E6E6E6",
    marginLeft: 15
  },
  iconRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft:7,
    marginTop: 15,
    
  }
})
