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
    const dataToBeSaved = {
      currCount : this.state.count,
      date : this.state.date,
      time : []
    }
    dataToBeSaved.time.push(this.state.time);
    const existingData = await AsyncStorage.getItem('timedata')
    let newData = JSON.parse(existingData);
    if(newData == null){
      newData = [];
    }
    newData.push(dataToBeSaved);
    newData[0].time.push(this.state.time);
    newData[0].currCount = ++this.state.count;
    this.setData('timedata',JSON.stringify(newData));
  }
  setData = async(key,value) => {
    await AsyncStorage.setItem(key,value);
  }
}

export default Home;