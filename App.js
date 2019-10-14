import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';

const FirstNavGroup = createStackNavigator({
  Home: {
    screen: Home
  },
  Feed: {
    screen: Feed
  },
  Profile: {
    screen: Profile
  }
},{
  initialRouteName:'Home'
})

export default createAppContainer(FirstNavGroup)