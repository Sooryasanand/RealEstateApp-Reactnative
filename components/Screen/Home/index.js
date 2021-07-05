import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../Search/SearchBar';
import Card from '../../Cards';
import data from '../../data/data';

const post1 = data[0];
const post2 = data[1];
const post3 = data[2];

export default function App() {
  return (
      <ImageBackground style={styles.Imagebg} source={require('../../../assets/realestate_bg.jpg')}>
        <View style={styles.container}>
          <SearchBar />
          <Text style={styles.rfytext}>Recommended for you</Text>
          <Card post={post1} />
          <Card post={post2} />
          <Card post={post3} />
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    Imagebg: {
      width: '100%',
      height: 320
    },
    rfytext: {
      fontWeight: 'bold',
      fontSize: 25,
      paddingTop: 250,
      paddingLeft: 15
    },
});
