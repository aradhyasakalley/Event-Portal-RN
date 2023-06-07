import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { ScrollView } from "react-native-gesture-handler";

const  UserEventView = () =>  {
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.image4Stack}>
        <Image
          source={require("../../images/Logo.jpg")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <View style={styles.rect2}>
          <View style={styles.groupRow}>
            <View style={styles.group}>
              <View style={styles.imageStack}>
                <Image
                  source={require("../../images/profile.jpg")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Image
                  source={require("../../images/profile.jpg")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Image
                  source={require("../../images/profile.jpg")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
              </View>
            </View>
            <Text style={styles.loremIpsum}>+20 participants</Text>
            <View style={styles.buttonStack}>
              <TouchableOpacity style={styles.button}></TouchableOpacity>
              <Text style={styles.invite}>Invite</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.hackprep40StackStack}>
        <View style={styles.hackprep40Stack}>
          <Text style={styles.hackprep40}>Hackprep 4.0</Text>
          <IoniconsIcon name="ios-calendar" style={styles.icon}></IoniconsIcon>
        </View>
        <Text style={styles.monApr182100}>Mon,Apr 18, 21:00</Text>
      </View>
      <Text style={styles.loremIpsum2}>21:00 to 23:30</Text>
      <Text style={styles.addToCalendar}>Add to calendar</Text>
      <View style={styles.icon2Row}>
        <EvilIconsIcon name="location" style={styles.icon2}></EvilIconsIcon>
        <Text style={styles.loremIpsum3}>3rd floor, Seminar Hall</Text>
      </View>
      <Text style={styles.aboutTheEvent}>About the Event</Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&#39;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text style={styles.pastEvent}>Past event</Text>
      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image4: {
    top: 0,
    left: 0,
    width: 327,
    height: 185,
    position: "absolute"
  },
  rect2: {
    top: 163,
    left: 23,
    width: 278,
    height: 47,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    flexDirection: "row"
  },
  group: {
    width: 29,
    height: 36
  },
  image: {
    top: 0,
    width: 29,
    height: 36,
    position: "absolute",
    left: 0
  },
  image2: {
    top: 1,
    width: 29,
    height: 36,
    position: "absolute",
    left: 14
  },
  image3: {
    top: 1,
    width: 29,
    height: 36,
    position: "absolute",
    left: 29
  },
  imageStack: {
    width: 58,
    height: 37,
    marginTop: -3
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 13,
    width: 109,
    marginLeft: 32,
    marginTop: 8
  },
  button: {
    top: 0,
    left: 0,
    width: 60,
    height: 24,
    position: "absolute",
    backgroundColor: "rgba(89,82,130,1)",
    borderRadius: 8
  },
  invite: {
    top: 4,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 52
  },
  buttonStack: {
    width: 62,
    height: 25,
    marginLeft: 18,
    marginTop: 4
  },
  groupRow: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 6,
    marginLeft: 22,
    marginTop: 7
  },
  image4Stack: {
    width: 327,
    height: 210,
    marginTop: 50,
    marginLeft: 24
  },
  hackprep40: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 164,
    fontSize: 20
  },
  icon: {
    top: 29,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  hackprep40Stack: {
    top: 0,
    left: 0,
    width: 164,
    height: 50,
    position: "absolute"
  },
  monApr182100: {
    top: 31,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 19,
    width: 272
  },
  hackprep40StackStack: {
    width: 295,
    height: 50,
    marginTop: 16,
    marginLeft: 24
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 270,
    fontSize: 12,
    marginLeft: 47
  },
  addToCalendar: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 15,
    width: 274,
    marginLeft: 47
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 278,
    marginLeft: 3,
    marginTop: 3
  },
  icon2Row: {
    height: 21,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 24,
    marginRight: 50
  },
  aboutTheEvent: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 164,
    fontSize: 20,
    marginTop: 23,
    marginLeft: 24
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 223,
    width: 298,
    marginLeft: 24
  },
  pastEvent: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 323,
    fontSize: 20,
    marginTop: 12,
    marginLeft: 28
  }
});

export default UserEventView;
