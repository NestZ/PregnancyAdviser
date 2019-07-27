import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import List from './H_Hourly_S';
import styles from './styles';

class History_Hourly extends React.Component{
  constructor(props){
    super(props);
    const {navigation} = this.props;
    let indexTemp = navigation.getParam('Index','-1');
    this.state = {
      timeArr : [],
      currIndex : indexTemp
    }
    this.setArr(this.state.currIndex);
    this.props.navigation.addListener('willFocus',this.updateArr.bind(this));
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null
    }
  }
  render(){
    let s;
    let keyIndex;
    let color;
    let timeList = this.state.timeArr.map((val,key) =>{
      keyIndex = key;
      return <List key={key} keyval={key} val={val}></List>
    });
    let len = this.state.timeArr.length;
    if(keyIndex != len - 1){
      if(len >= 10){
        s = "ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ";
        color = '#4ede72';
      }
      else{
        s = "ลูกในท้องมีความผิดปกติ ควรรีบมาพบแพทย์!!";
        color = '#ff5757';
      }
    }
    else{
      s = "-ยังไม่ครบ 1 วัน-";
      color = '#4ede72';
    }
    return (
      <View style={styles.container}>
        <View style={styles.hourHeader}>
          <Text style={styles.hourHeaderText}>Date</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {timeList}
        </ScrollView>
        <View style={{backgroundColor: color,
                      height: 80,
                      width: '100%',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      elevation: 25,
                      alignItems: 'center',
                      justifyContent: 'center'}}>
          <Text style={styles.resText}>{s}</Text>
        </View>
      </View>
    );
  }
  updateArr = async() => {
    this.setArr(this.state.currIndex);
    this.setState({timeArr:this.state.timeArr});
  }
  setArr = async(index) => {
    var newData = await this.getDataWithKey('timedata')
    this.setState({timeArr:newData[index].time});
  }
  getDataWithKey = async(key) => {
    try {
      const data = await AsyncStorage.getItem(key)
      var newData = JSON.parse(data);
      return newData;
    }
    catch(e){
      return;
    }
  }
}

export default History_Hourly;