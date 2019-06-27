import {createStackNavigator, createAppContainer} from 'react-navigation';
import History_Diary from './H_Diary';
import History_Hourly from './H_Hourly';

const StackNavigator =  createStackNavigator({
  History_Diary : History_Diary,
  History_Hourly : History_Hourly
});

export default createAppContainer(StackNavigator);