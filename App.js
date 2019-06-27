import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './Screens/Home';
import History from './Screens/H_MainNav';
import gotoInformation from './Screens/gotoinformation';

const TabNavigator =  createBottomTabNavigator({
  Home : Home,
  History : History,
  gotoInformation : gotoInformation,
});

export default createAppContainer(TabNavigator);