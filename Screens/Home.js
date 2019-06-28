import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      count : 0,
      date : '',
      time : ''
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.plusCounter()}>
          <Text>PLUS COUNTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
  plusCounter = async() => {
    await this.setDate()
    await this.setTime()
    this.pushData();
  }
  setDate(){
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    this.setState({date:
      date + '/' + month + '/' + year
    });
  }
  setTime(){
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    this.setState({time:
      hour + ':' + minute
    });
  }
  pushData = async() => {
    //Temp
    var nowDate = new Date().getDate();
    const dataToBeSaved = {
      currCount : 1,
      date : this.state.date,
      dateNo : new Date().getDate(),
      time : []
    }
    dataToBeSaved.time.push(this.state.time);
    //Get previous data
    const existingData = await AsyncStorage.getItem('timedata')
    let newData = JSON.parse(existingData);
    if(newData != null){
      var size = Object.keys(newData).length;
    }
    //Check if it already has data
    if(newData == null){
      //Create new data
      newData = [];
      newData.push(dataToBeSaved);
    }
    else if(newData[size - 1].dateNo == nowDate){
      //Push time & Plus Count
      newData[size - 1].time.push(this.state.time);
      newData[size - 1].currCount = newData[size - 1].currCount + 1;
    }
    else if(newData[size - 1].dateNo != nowDate){
      newData.push(dataToBeSaved);
    }
    //Set Data
    this.setData('timedata',JSON.stringify(newData));
  }
  setData = async(key,value) => {
    await AsyncStorage.setItem(key,value);
  }
}

export default Home;