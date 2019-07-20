import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from 'react-navigation';
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
    resContainer:{
      backgroundColor: '#fffdd1',
      height: 100,
      width: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      elevation: 25
    },
    resHeader:{
      fontSize: 16,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    resText:{
      fontSize: 16,
      padding: 15
    }
})

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
    //this.props.navigation.addListener('willBlur',() => {this.props.navigation.dispatch(StackActions.popToTop())});
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null
    } 
  }
  render(){
    let s;
    let keyIndex;
    let timeList = this.state.timeArr.map((val,key) =>{
      keyIndex = key;
      return <List key={key} keyval={key} val={val}></List>
    });
    let len = this.state.timeArr.length;
    //if(keyIndex != len - 1){
      if(len >= 10)s = "ยินดีด้วย!! ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ\nมีพัฒนาการ การเจริญเติบโตที่ดี";
      else s = "ลูกในท้องมีความผิดปกติ ควรรีบมาพบแพทย์";
    //}
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Date</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {timeList}
        </ScrollView>
        <View style={styles.resContainer}>
          {/* <Text style={styles.resHeader}>-แปลผล-</Text> */}
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