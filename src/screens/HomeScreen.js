//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Post from './Post';

const HomeScreen = () => {
  //api hit on initial render
  useEffect(() => {
    apiCall();
  }, []);

  const [list, setList] = useState([]);
  const [filteredData, setFilteredData] = useState(list);
  const [searchTxt, setSearchTxt] = useState('');

  var posts = [];

  //Api calling
  function apiCall() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

    axios.get(BASE_URL).then(response => {
      setList(response.data);
      setFilteredData(response.data);
    });
  }
  //filter txt logic
  function handleSearch(value) {
    posts = list.filter(data => {
      return data.title.search(value) != -1;
    });
    setFilteredData(posts);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.backgroundStyle}>
          <TextInput
            placeholder="Search..."
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.inputStyle}
            value={searchTxt}
            onChangeText={setSearchTxt}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSearch(searchTxt)}>
          <Text style={styles.text}>Details</Text>
        </TouchableOpacity>
      </View>
      <Post filteredData={filteredData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    borderWidth: 1.5,
    height: 50,
    width: 260,
    borderRadius: 12,
    marginHorizontal: 10,
    margin: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    color: 'black',
    margin: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
