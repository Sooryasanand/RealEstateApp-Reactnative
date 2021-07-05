import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../Search/SearchBar';

export default function App() {
  return (
      <ImageBackground style={styles.Imagebg} source={require('../../../assets/realestate_bg.jpg')}>
        <View style={styles.container}>
              <SearchBar />
          <Text style={styles.rfytext}>Recommended for you</Text>
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
      height: '65%'
    },
    rfytext: {
      fontWeight: 'bold',
      fontSize: 25,
      paddingTop: 250,
      paddingLeft: 15
    }
});
