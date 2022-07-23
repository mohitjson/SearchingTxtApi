//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Post = ({filteredData}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>Posts</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTxt1}>Id</Text>
        <Text style={styles.columnTxt2}>Titles</Text>
        <Text style={styles.columnTxt3}>Body</Text>
      </View>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.listView}>
                <Text style={styles.id}>{item.id}</Text>
                <Text style={styles.titleTxt}>{item.title}</Text>
                <Text style={styles.bodyTxt}>{item.body}</Text>
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.errorTxt}>No search found..</Text>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  column: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    marginBottom: 10,
  },
  columnTxt1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  columnTxt2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  columnTxt3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 100,
  },
  listView: {
    flexDirection: 'row',
    margin: 5,
  },
  id: {
    color: 'red',
    marginHorizontal: 10,
    fontSize: 18,
  },
  titleTxt: {
    width: 150,
    fontSize: 16,
    marginLeft: 5,
  },
  bodyTxt: {
    width: 150,
    fontSize: 16,
  },
  errorTxt: {
    fontSize: 20,
    color: 'red',
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default Post;
