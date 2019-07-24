import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {Component} from 'react';
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
        <View style={styles.hourHeader}>
          <Text style={styles.hourHeaderText}>Date</Text>
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