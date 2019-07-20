import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './Screens/Home';
import History from './Screens/H_MainNav';
import Information from './Screens/Details';
import {Icon} from 'react-native-elements';
import React, {Component} from 'react';

const TabNavigator =  createBottomTabNavigator({
  Home : Home,
  History : History,
  Information : Information,
},
{
  defaultNavigationOptions : ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      let { routeName } = navigation.state;
      let iconName;
      if(routeName === 'Home'){
        iconName = "home";
      }
      else if(routeName === 'History'){
        iconName = "history";
      }
      else if(routeName === 'Information'){
        iconName = "list";
      }
      return (<Icon
              name={`${iconName}`}
              size={30}
              color={`${tintColor}`}
              type='Feather'
              />);
    }
  }),
  tabBarOptions:{
    activeBackgroundColor: 'white',
    inactiveBackgroundColor: 'white',
    activeTintColor: '#f5424e',
    inactiveTintColor: 'gray'
  }
});

export default createAppContainer(TabNavigator);