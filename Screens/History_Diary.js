import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

/*
GLOBAL VAR
-count per day
  -date
  -count
  -all timestamp
*/

dateList = [
  {
    id : 1,
    date : "12/01/61",
    count : 8
  },
  {
    id : 2,
    date : "5/8/61",
    count : 12
  }
];
  
const styles = StyleSheet.create({
    date:{
      color : 'black',
      fontSize: 30,
      textAlign: 'left'
    },
    freq:{
      color : 'red',
      fontSize : 30,
      textAlign: 'right'
    }
})

function renderDate(navigate){
    const dateArr = dateList.map((buttonInfo) => {
        return  <TouchableOpacity key={buttonInfo.id} onPress={() => navigate('History_Hourly',{count:buttonInfo.date})}>
                    <Text style={styles.date}>{buttonInfo.date}</Text><Text style={styles.freq}>{buttonInfo.count}</Text>
                </TouchableOpacity>
    });
    return dateArr;
}

class History_Diary extends React.Component{
  constructor(){
    super();
    this.state = {
      time: '',
      counter : 0,
      nowTime : ''
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        {renderDate(navigate)}
        <TouchableOpacity onPress={() => this.plusCounter()}>
          <Text>PLUS COUNTER</Text>
        </TouchableOpacity>
        <Text>
          counter : {this.state.counter} Time : {this.state.time}
        </Text>
        <Text>
          {this.state.nowTime}
        </Text>
      </View>
    );
  }
  plusCounter = async() => {
    await this.getTime()
    this.pushData();
  }
  getTime = async() => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    this.setState({counter:++this.state.counter});
    this.setState({time:
      date + '/' + month + '/' + year + ' ' + hour + ':' + minute
    });
  }
  pushData = async() => {
    //await AsyncStorage.removeItem('timedata')
    const dataToBeSaved = {
      currCount : this.state.counter,
      timer : this.state.time
    }
    const existingData = await AsyncStorage.getItem('timedata')
    let newData = JSON.parse(existingData);
    if(newData == null){
      newData = [];
    }
    newData.push(dataToBeSaved);
    this.setData('timedata',JSON.stringify(newData));
    /*const data = await AsyncStorage.getItem('timedata')
    let lastData = JSON.parse(data);
    this.setState({nowTime:lastData[0].timer});*/
  }
  setData = async(key, value) => {
    try{
      await AsyncStorage.setItem(key,value)
    }
    catch(e){
      return;
    }
  }
  getData = async() => {
    try {
      await AsyncStorage.getItem('timedata')
    }
    catch(e){
      return;
    }
  }
}

export default History_Diary;