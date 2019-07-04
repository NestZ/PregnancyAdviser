import {createStackNavigator, createAppContainer} from 'react-navigation';
import History_Diary from './H_Diary';
import History_Hourly from './H_Hourly';

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

const StackNavigator =  createStackNavigator({
  History_Diary : History_Diary,
  History_Hourly : History_Hourly
},{ transitionConfig:NavigationConfig });

export default createAppContainer(StackNavigator);