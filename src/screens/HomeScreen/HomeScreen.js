//this is the newly made homescreen

import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import CardSilder from 'react-native-cards-slider';
import EventsCard from '../../components/EventsCard';
import {heightToDp, widthToDp} from '../../Responsive';
import SearchBar from '../../components/SearchBar';
import {Header} from 'react-native-elements';
import {PixelRatio} from 'react-native';
import {
    backDropColor,
    bgColor,
    statusbarColor,
    subtextColor,
  } from '../../Constants';
import { ScrollView } from 'react-native-gesture-handler';
const HomeScreen = () => {
    const [searchedData, setSearchedData] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperRow}>
          <TouchableOpacity style={styles.profileImgContainer}>
            <Image source={require('../../images/profile.jpg')} style={styles.profileImg} />
          </TouchableOpacity>
          <View style={styles.upperColumn}>
            <Text style={styles.title}>Hi, Aradhya Sakalley</Text>
            <Text style={styles.subtitle}>6000421053</Text>
          </View>
        </View>
      <View style={styles.icon}>
        <SearchBar
          title={'Search for an event'}
          type={'event'}
          callback={setSearchedData}
        />
        <View style={{width: widthToDp('3')}} />
      </View>
      
      <Text style={styles.headertext}>Most Poular Events</Text>
      <CardSilder style ={styles.slider}>
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </CardSilder>
      <Text style={styles.headertext}>Commitees/Clubs</Text>
      <CardSilder style ={styles.slider}>
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </CardSilder>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  headertext: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '400',
    
  },
  icon: {
    margin:12,
    paddingTop: heightToDp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  upperRow: {
    marginTop:-25,
    alignItems:'center',
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'space-evenly',
  },
  upperColumn: {
    marginRight:10,
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'space-evenly',
  },
  profileImgContainer: {
    height: heightToDp('10%'),
    width: widthToDp('10%'),
    borderRadius: 40,
    paddingRight: widthToDp('40%'),
    paddingLeft: widthToDp('15%'),
    paddingTop: heightToDp('3%'),
  },
  profileImg: {
    height: heightToDp('9%'),
    width: heightToDp('9%'),
    borderRadius: 50,
  },
  subtitle: {
    color: '#bcbec0',
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    paddingTop: heightToDp('4%'),
    color: subtextColor,
    paddingRight: 90,
    fontSize: PixelRatio.getFontScale() * 20,
  },
  slider:{
    marginTop:20,
    marginBottom:20,
    
  }
});
