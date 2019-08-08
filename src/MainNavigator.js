import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/home/Home'

export const MainNavigator = createStackNavigator(
    {
        Home: {screen: HomeScreen},
    },
    {
        initialRouteName: 'Home'
    }
)