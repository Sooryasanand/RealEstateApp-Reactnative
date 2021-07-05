import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './style.js';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';

const Post = (props) => {

    const post = props.post;

    return(
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{uri: post.image}} />
            {/* Type */}
            <View style={styles.type}>
              <Entypo name="dot-single" size={30} color="black" />
              <Text style={styles.typetext}>{post.type}</Text>
            </View>
            {/* Price */}
            <Text style={styles.price}>${post.price}</Text>
            {/* Address */}
            <Text style={styles.address}>{post.address}</Text>
            {/* Bed & Bath & Garage logo */}
            <View style={styles.bbg}>
                <View style={styles.bed}>
                    <Ionicons name="bed-outline" size={24} color="black" />
                    <Text style={styles.bedtext}>{post.bed}</Text>
                </View>
                <View style={styles.bed}>
                    <FontAwesome name="bath" size={24} color="black" />
                    <Text style={styles.bedtext}>{post.bath}</Text>
                </View>
                <View style={styles.bed}>
                    <FontAwesome name="car" size={24} color="black" />
                    <Text style={styles.bedtext}>{post.garage}</Text>
                </View>
            </View>
        </View>
    );
};

export default Post;