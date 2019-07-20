import {createStackNavigator, createAppContainer} from 'react-navigation';
import Information from './Information';
import Musiclist from './Musiclist';
import Details1 from './details/Details1';
import Details2 from './details/Details2';
import Details3 from './details/Details3';
import Details4 from './details/Details4';
import Details5 from './details/Details5';
import Callphone from './Callphone';


const StackNavigator =  createStackNavigator({
  Information : Information,
  Musiclist : Musiclist,
  Details1 : Details1,
  Details2 : Details2,
  Details3 : Details3,
  Details4 : Details4,
  Details5 : Details5,
  Callphone : Callphone,
});

export default createAppContainer(StackNavigator);