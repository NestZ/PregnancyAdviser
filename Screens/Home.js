import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      counter : 0,
      time : '',
      nowTime : ''
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.plusCounter()}>
          <Text>PLUS COUNTER</Text>
        </TouchableOpacity>
        <Text>Counter : {this.state.counter} Time : {this.state.time}</Text>
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
  }
  setData = async(key,value) => {
    await AsyncStorage.setItem(key,value);
  }
}

export default Home;