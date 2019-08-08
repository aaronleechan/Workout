import React from 'react'
import {View,Text} from 'react-native';
import {MainNavigator} from '../../MainNavigator';
import {createAppContainer} from 'react-navigation';

const MainContainer = createAppContainer(MainNavigator)

const Main = () => {
    return(
        <MainContainer />
    )
}

export default Main