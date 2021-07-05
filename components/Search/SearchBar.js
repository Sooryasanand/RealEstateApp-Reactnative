import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.vwSearch}>
                <AntDesign name="search1" size={24} color="black" />
            </View>
            <TextInput
                placeholder="Search Properties, Hostels..."
                style={styles.textInput}
                onChangeText={(text) => {
                    var letters = /^$|^[a-zA-Z._\b ]+$/;
                    if (text.length > 12)
                        setError("Query too long.")
                    else if (text.match(letters)) {
                        setQuery(text)
                        updateSearch(text)
                        if (error)
                            setError(false)
                    }
                    else setError("Please only enter alphabets")
                }}
            />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    textInput: {
        // backgroundColor: 'green',
        flex: 1,
        fontSize: 20
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    searchContainer:
    {
        backgroundColor: 'white',
        width: '90%',
        height: 40,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#B2ADAD',
        borderWidth: 1
    },
    container: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
        // height: '100%', width: '100%' 
    },
});
