import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';

const FirstNavGroup = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home'
    })
  },
  Feed: {
    screen: Feed,
    navigationOptions: () => ({     //edit styles here to change styles for specific screen's header
      title: 'Feed',
      headerStyle: {
        backgroundColor: '#f39c12'
      }
    })
  },
  Profile: {
    screen: Profile
  }
},{
  initialRouteName:'Home',
  defaultNavigationOptions: () => ({    //edit styles here to change the global header
    title: 'React Native Navigation',
    headerStyle: {
      backgroundColor: '#34495e'
    },
    headerTintColor: '#c0392b'
  }),
  headerLayoutPreset: 'left'
})

export default createAppContainer(FirstNavGroup)