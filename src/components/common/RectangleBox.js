import React from 'react';
import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RectangleBox = (props) =>{
    return(
        <View style={styles.bigbox}>
            <Text>{props.title}</Text>
        </View>
    )
}

module.exports = RectangleBox

const styles = StyleSheet.create({
    bigbox:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: screenWidth-20,
        height: 200,
        backgroundColor: 'grey',
        marginBottom: 5,
        marginRight: 5,
    }
})

