import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';
import News from './News';

const FirstNavGroup = createBottomTabNavigator({
  News: {
    screen: Feed
  },
  Profile: {
    screen: Profile
  }
},{
  initialRouteName:'News'
})

const SecondNavGroup = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Feed: {
    screen: FirstNavGroup
  }
},{
  initialRouteName:'Home'
})

export default createAppContainer(SecondNavGroup)