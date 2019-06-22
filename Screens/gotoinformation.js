import {createStackNavigator, createAppContainer} from 'react-navigation';
import Information from './Information';
import Musiclist from './Musiclist';

const StackNavigator =  createStackNavigator({
  Information : Information,
  Musiclist : Musiclist
});

export default createAppContainer(StackNavigator);