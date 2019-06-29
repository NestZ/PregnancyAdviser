import {createStackNavigator, createAppContainer} from 'react-navigation';
import homedetails from './homedetails';
import Details1 from './Details1';
import Details2 from './Details2';
import Details3 from './Details3';
import Details4 from './Details4';

const StackNavigator =  createStackNavigator({
  homedetails : homedetails,
  Details1 : Details1,
  Details2 : Details2,
  Details3 : Details3,
  Details4 : Details4,
});

export default createAppContainer(StackNavigator);