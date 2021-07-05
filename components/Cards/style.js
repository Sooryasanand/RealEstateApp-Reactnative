import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingBottom: 20
    },
    type: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    typetext: {
        fontSize: 15,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    price: {
        fontSize: 26,
        paddingTop: 5,
        paddingLeft: 20
    },
    address: {
        paddingTop: 5,
        paddingLeft: 20
    },
    bbg: {
        flexDirection: 'row',
        paddingTop: 15
    },
    bed: {
        flexDirection: 'row',
        paddingLeft: 20
        
    },
    bedtext: {
        fontSize: 19,
        paddingLeft: 5
    }
});

export default styles;