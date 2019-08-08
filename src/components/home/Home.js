import React from 'react'
import {View,ScrollView,StyleSheet} from 'react-native';
import CustomWorkout from '../createworkout/customWorkout'

export const Home = () => {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer}>
                <CustomWorkout/>
            </ScrollView>
        </View>
    )
}

module.exports = Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    scrollViewContainer:{
        flexDirection: 'column',
    }
})
