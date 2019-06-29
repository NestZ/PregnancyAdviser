import {createStackNavigator, createAppContainer} from 'react-navigation';
import Information from './Information';
import Musiclist from './Musiclist';
import gotodetails from './details/gotodetails';


const StackNavigator =  createStackNavigator({
  Information : Information,
  Musiclist : Musiclist,
  gotodetails : gotodetails,
});

export default createAppContainer(StackNavigator);