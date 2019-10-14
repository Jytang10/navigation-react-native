import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';

const FirstNavGroup = createSwitchNavigator({
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
  initialRouteName:'Feed'
})

export default createAppContainer(FirstNavGroup)