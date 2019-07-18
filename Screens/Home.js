import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ddd'
  },
  headerText:{
    color: '#f5424e',
    fontSize: 20,
    padding: 13
  },
  footIcon:{
    width: 170,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  iconContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterText:{
    color: 'white',
    fontSize: 60
  },
  minusButton:{
    position: 'absolute',
    left: 20,
    bottom: 40,
    backgroundColor: '#f5424e',
    width: 90,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  minusButtonText:{
    color: 'white',
    fontSize: 16
  }
})

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      count : '',
      date : '',
      time : '',
      thisCount : 0
    }
    this.setThisCount();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => this.plusCounter()}>
            <ImageBackground style={styles.footIcon} source={require('./img/footIcon.png')}>
              <Text style={styles.counterText}>{this.state.thisCount}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.minusButton} onPress={() => this.minusCounter()}>
          <Text style={styles.minusButtonText}>Delete 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
  minusCounter = async() => {
    var nowDate = new Date().getDate();
    const existingData = await AsyncStorage.getItem('timedata')
    let data = JSON.parse(existingData);
    if(data != null){
      var size = Object.keys(data).length;
      if(data[size - 1].dateNo === nowDate && data[size - 1].currCount > 0){
        if(data[size - 1].currCount === 1){
          data.pop();
        }
        else{
          data[size - 1].time.pop();
          data[size - 1].currCount = data[size - 1].currCount - 1;
        }
        this.setData('timedata',JSON.stringify(data));
        this.setThisCount();
      }
    }
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
    if(hour < 10)hour = '0' + hour;
    if(minute < 10)minute = '0' + minute;
    this.setState({time:
      hour + ':' + minute
    });
  }
  pushData = async() => {
    var nowDate = new Date().getDate();
    const dataToBeSaved = {
      currCount : 1,
      date : this.state.date,
      dateNo : new Date().getDate(),
      time : []
    }
    dataToBeSaved.time.push(this.state.time);
    const existingData = await AsyncStorage.getItem('timedata')
    let newData = JSON.parse(existingData);
    if(newData != null){
      var size = Object.keys(newData).length;
    }
    if(newData == null){
      newData = [];
      newData.push(dataToBeSaved);
    }
    else if(newData[size - 1].dateNo === nowDate){
      newData[size - 1].time.push(this.state.time);
      newData[size - 1].currCount = newData[size - 1].currCount + 1;
    }
    else if(newData[size - 1].dateNo != nowDate){
      newData.push(dataToBeSaved);
    }
    this.setData('timedata',JSON.stringify(newData));
    this.setThisCount();
  }
  setData = async(key,value) => {
    await AsyncStorage.setItem(key,value);
  }
  setThisCount = async() => {
    const rawData = await AsyncStorage.getItem('timedata')
    let newData = JSON.parse(rawData);
    if(newData != null && newData[size - 1].currCount > 0 && newData[size - 1].dateNo === nowDate){
      var size = Object.keys(newData).length;
      var nowDate = new Date().getDate();
      this.setState({thisCount:String(newData[size - 1].currCount)});
    }
    else{
      this.setState({thisCount:'0'});
    }
  }
}

export default Home;