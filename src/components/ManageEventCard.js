import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const  ManageEventCard = () =>  {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../images/acm_logo.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.april142023Column}>
            <Text style={styles.april142023}>April 14, 2023</Text>
            <Text style={styles.eventTitle}>Event Title</Text>
            <Text style={styles.eventDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.rect3}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 61
  },
  rect: {
    width: 320,
    height: 177,
    backgroundColor: "#E8C4C4",
    borderRadius: 55,
    marginTop: 47,

  },
  image: {
    width: 135,
    height: 136,
    borderRadius: 33,
    marginRight:10
  },
  april142023: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 11,
    width: 92,
    fontSize: 10
  },
  eventTitle: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 25,
    width: 131,
    fontSize: 20,
    marginTop: 5
  },
  eventDescription: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 38,
    width: 118,
    fontSize: 9,
    marginTop: 1
  },
  button: {
    width: 57,
    height: 26,
    backgroundColor: "rgba(47,83,125,1)",
    borderRadius: 29
  },
  rect3: {
    fontFamily: "roboto-regular",
    color: "rgba(240,222,222,1)",
    height: 15,
    width: 33,
    marginTop: 3,
    marginLeft: 12
  },
  button2: {
    width: 61,
    height: 26,
    backgroundColor: "rgba(53,90,133,1)",
    borderRadius: 29,
    marginLeft: 7
  },
  cancel: {
    fontFamily: "roboto-regular",
    color: "rgba(240,222,222,1)",
    height: 15,
    width: 47,
    marginTop: 3,
    marginLeft: 9
  },
  buttonRow: {
    height: 26,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: -1,
    marginRight: 3
  },
  april142023Column: {
    width: 131,
    marginLeft: 7,
    marginTop: 13
  },
  imageRow: {
    height: 137,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 18,
    marginRight: 29
  }
});

export default ManageEventCard;