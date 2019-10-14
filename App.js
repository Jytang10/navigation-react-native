import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Image, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';
import Friend from './Friend';

const FirstNavGroup = createStackNavigator({
  Home: {
    screen: Home,
    // navigationOptions: (navigation) => ({
    //   // tabBarLabel: "Click me!",
    //   tabBarIcon:({focused, tintColor}) => {
    //     return <Icon name="music" size={20} color={tintColor}></Icon>
    //   }
    // })
    // navigationOptions: () => ({
    //   title: 'Home',
    //   header: null
    // })
  },
  Feed: {
    screen: Feed,
    // navigationOptions: (navigation) => ({
    //   tabBarIcon:({focused, tintColor}) => {
    //     return <Icon name="hand-o-up" size={20} color={tintColor}></Icon>
    //   }
    // })
    // navigationOptions: () => ({     //edit styles here to change styles for specific screen's header
    //   title: 'Feed',
    //   headerStyle: {
    //     backgroundColor: '#f39c12'
    //   }
    // })
  },
  // Profile: {
  //   screen: Profile,
    // navigationOptions: (navigation) => ({
    //   tabBarIcon:({focused, tintColor}) => {
    //     return <Icon name="flask" size={20} color={tintColor}></Icon>
    //   }
    // })
  // }
},{
  initialRouteName:'Home',
  // tabBarOptions: {
  //   activeTintColor:'#c0392b',   //changes color of the current screen's title in bottom nav
  //   activeBackgroundColor:'#95a5a6',  //changes color of background of active tab only
  //   // showLabel: false,
  //   labelStyle:{
  //     fontSize:16
  //   },
  //   style: {
  //     backgroundColor:'#2c3e50'
  //   }
  // }
  // defaultNavigationOptions: () => ({    //edit styles here to change the global header
  //   //title: 'React Native Navigation',
  //   headerRight: <View style={{paddingRight:10}}><Button title="Menu"></Button></View>,
  //   headerStyle: {
  //     backgroundColor: '#34495e'
  //   },
  //   headerTitle: <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/eve.png?alt=media&token=004e2c4e-9000-4ec4-a82f-866b71f3bd60'}} style={{height:50, width:50}}></Image>,
  //   // headerTintColor: '#c0392b',
  //   // headerTitleStyle: {
  //   //   fontSize: 20
  //   // }
  // }),
  // headerLayoutPreset: 'left',
})

const SecondNavGroup = createStackNavigator({
  Profile: {
    screen: Profile,
  },
  Friend: {
    screen: Friend
  }
})

const ThirdNavGroup = createBottomTabNavigator({
  FirstNavGroup: {
    screen: FirstNavGroup
  },
  SecondNavGroup: {
    screen: SecondNavGroup
  }
})

export default createAppContainer(ThirdNavGroup)