import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const CommitteeCard = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Image
        source={require("../images/Logo.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.djAcmColumnRow}>
        <View style={styles.djAcmColumn}>
          <Text style={styles.djAcm}>DJ ACM </Text>
          <Text style={styles.loremIpsum}>100 followers</Text>
        </View>
        <Icon name="ios-add-circle-outline" style={styles.icon}></Icon>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default CommitteeCard

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      button: {
        width: 323,
        height: 176,
        backgroundColor: "rgba(28,64,100,1)",
        borderRadius: 15,
        marginTop: 62,
        marginLeft: 59
      },
      image: {
        width: 200,
        height: 112,
        borderRadius: 15,
        marginTop: 13,
        marginLeft: 12
      },
      djAcm: {
        fontFamily: "roboto-regular",
        color: "rgba(229,222,222,1)",
        height: 16,
        width: 51
      },
      loremIpsum: {
        fontFamily: "roboto-regular",
        color: "rgba(216,216,216,1)",
        height: 15,
        width: 92,
        fontSize: 9,
        marginTop: 1
      },
      djAcmColumn: {
        width: 92,
        marginTop: 4
      },
      icon: {
        color: "rgba(128,128,128,1)",
        fontSize: 29,
        height: 32,
        width: 24,
        marginLeft: 82
      },
      djAcmColumnRow: {
        height: 36,
        flexDirection: "row",
        marginTop: 4,
        marginLeft: 14,
        marginRight: 11
      }
})