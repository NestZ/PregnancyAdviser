import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './Screens/Home';
import {Icon} from 'react-native-elements';
import React from 'react';
import History_Diary from './Screens/H_Diary';
import History_Hourly from './Screens/H_Hourly';
import Info from './Screens/Information';
import Musiclist from './Screens/Musiclist';
import Details1 from './Screens/details/Details1';
import Details2 from './Screens/details/Details2';
import Details3 from './Screens/details/Details3';
import Details4 from './Screens/details/Details4';
import Details5 from './Screens/details/Details5';
import Callphone from './Screens/Callphone';

const rightTransition = (index, position, width) => {
  const sceneRange = [index - 1, index];
  const outputWidth = [width,0];
  const transition = position.interpolate({
    inputRange:sceneRange,
    outputRange: outputWidth
  });

  return{
    transform: [{translateX: transition}]
  }
}

const NavigationConfig = () => {
  return{
    screenInterpolator: (sceneProps) => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      const width = sceneProps.layout.initWidth;
      return rightTransition(index, position, width);
    }
  }
}

const Details =  createStackNavigator({
  Info : Info,
  Musiclist : Musiclist,
  Details1 : Details1,
  Details2 : Details2,
  Details3 : Details3,
  Details4 : Details4,
  Details5 : Details5,
  Callphone : Callphone,
},{ transitionConfig:NavigationConfig });

Details.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const History =  createStackNavigator({
  History_Diary : History_Diary,
  History_Hourly : History_Hourly
},{ transitionConfig:NavigationConfig });

History.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const TabNavigator =  createBottomTabNavigator({
  Home : Home,
  History : History,
  Informations : Details,
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
      else if(routeName === 'Informations'){
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
    activeBackgroundColor: '#f5424e',
    inactiveBackgroundColor: '#f5424e',
    activeTintColor: 'white',
    inactiveTintColor: 'black'
  }
});

export default createAppContainer(TabNavigator);