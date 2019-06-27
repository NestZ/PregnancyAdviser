import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import List from './H_Hourly_S';

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    header:{
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 5,
      borderBottomColor: '#ddd'
    },
    headerText:{
      color: 'white',
      fontSize: 18,
      padding: 15
    },
    scrollContainer:{
      flex: 1
    },
})

class History_Hourly extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: '',
      counter : 1,
      nowTime : '',
      listArr: []
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render(){
    const {navigate} = this.props.navigation;
    let timeList = this.state.listArr.map((val,key) => {
      return <TouchableOpacity key={key} onPress={() => navigate('History_Diary')}><List keyval={key} val={val}></List></TouchableOpacity>
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Date</Text>
        </View>
        <TouchableOpacity onPress={() => this.getTime()}>
          <Text>add to state</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.addList.bind(this)}>
          <Text>add state to list</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollContainer}>
          {timeList}
        </ScrollView>
      </View>
    );
  }
  addList(){
     this.state.listArr.push({
        'date' : this.state.time,
        'count' : this.state.counter
     });
     this.setState({listArr:this.state.listArr});
  }
  test = async() => {
    var newData = await this.getDataWithKey('timedata');
    this.setState({obj:newData});
  }
  plusCounter(){
    this.getTime().then(() => {this.pushData('timedata');});
  }
  getTime(){
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
  pushData = async(key) => {
    const dataToBeSaved = {
      id : this.state.counter,
      currCount : this.state.counter,
      timer : this.state.time
    }
    const data = await AsyncStorage.getItem(key)
    let newData = JSON.parse(data);
    if(newData == null){
      newData = [];
    }
    newData.push(dataToBeSaved);
    this.setData('timedata',JSON.stringify(newData));
  }
  setData = async(key, value) => {
    try{
      await AsyncStorage.setItem(key,value)
    }
    catch(e){
      return;
    }
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
  resetData = async() => {
    try{
      await AsyncStorage.removeItem('timedata');
    }
    catch{
      return;
    }
  }
}

export default History_Hourly;