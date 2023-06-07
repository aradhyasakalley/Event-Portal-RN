/* Search bar is used to search events or committees with the help of getSearched function*/
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {backDropColor, getSearched, subtextColor} from '../Constants';

const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.sectionStyle}>
      <Icon
        name="search"
        style={styles.icon}
        size={28}
        color={'#BFB2B2'}
        onPress={() => getSearched(props.type, query, props.callback)}
      />
      <TextInput
        placeholder={props.title}
        value={query}
        onChangeText={(value) => {
          setQuery(value);
        }}
        onEndEditing={() => getSearched(props.type, query, props.callback)}
        onSubmitEditing={() => getSearched(props.type, query, props.callback)}
        placeholderTextColor="#BFB2B2"
        style={{flex: 1, fontSize: 16, paddingLeft: 17, color: subtextColor}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 15,
    paddingTop: 9,
    paddingBottom: 9,
  },
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: backDropColor,
    borderRadius: 8,
    width: '100%',
    height: 46,
  },
});

export default SearchBar;
