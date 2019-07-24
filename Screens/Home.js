import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ImageBackground, Modal} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Notification from 'react-native-android-local-notification';
import { Image } from 'react-native-elements';
import styles from './styles';

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      count : '',
      date : '',
      time : '',
      thisCount : 0,
      Alert_Visibility: false,
      Info_Visibility: false
    }
    this.setThisCount();
  }
  render() {
    let alertTitle = "ยินดีด้วย !!";
    let alertMessage = "ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ\nมีพัฒนาการ การเจริญเติบโตที่ดี";
    let ok = "ตกลง";
    let infoTitle = "คำแนะนำ";
    let infoMessage = "";
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.Alert_Visibility}
          transparent={true}
          animationType={"fade"}
          onRequestClose={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)}}>
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.Alert_Main_View}>
                  <Text style={styles.Alert_Title}>{alertTitle}</Text>
                  <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}}/>
                  <Text style={styles.Alert_Message}>{alertMessage}</Text>
                  <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}}/>
                  <View style={{height: '30%',width: '100%'}}>
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={() => this.Show_Custom_Alert(!this.state.Alert_Visibility)}
                      activeOpacity={0.7}>
                      <Text style={styles.TextStyle}>{ok}</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
        </Modal>
        <Modal
          visible={this.state.Info_Visibility}
          transparent={true}
          animationType={"fade"}
          onRequestClose={() => { this.Show_Info_Alert(!this.state.Info_Visibility)}}>
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.Alert_Main_View}>
                  <Text style={styles.Alert_Title}>{infoTitle}</Text>
                  <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}}/>
                  <Text style={styles.Alert_Message}>{infoMessage}</Text>
                  <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}}/>
                  <View style={{height: '30%',width: '100%'}}>
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={() => this.Show_Info_Alert(!this.state.Info_Visibility)}
                      activeOpacity={0.7}>
                      <Text style={styles.TextStyle}>{ok}</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
        </Modal>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.InfoIconContainer}>
          <TouchableOpacity onPress={() => this.Show_Info_Alert(true)}>
            <Image source={require('./img/icon.png')} style={{height:35, width:35}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => this.plusCounter()}>
            <ImageBackground style={styles.footIcon} source={require('./img/footIcon.png')}>
              <Text style={styles.counterText}>{this.state.thisCount}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.minusButton} onPress={() => this.minusCounter()}>
          <Text style={styles.minusButtonText}>ลบ 1</Text>
        </TouchableOpacity>
        {/*<Button onPress={() => Notification.create({ subject: 'Hey', message: 'Yo! Hello world.' })} title="kuy"/> */}
      </View>
    );
  }
  Show_Custom_Alert(visible){
    this.setState({Alert_Visibility:visible});
  }
  Show_Info_Alert(visible){
    this.setState({Info_Visibility:visible});
  }
  minusCounter = async() => {
    var nowDate = new Date().getDate();
    const existingData = await AsyncStorage.getItem('timedata')
    let data = JSON.parse(existingData);
    if(data != null){
      var size = Object.keys(data).length;
      if(data[size - 1].dateNo == nowDate && data[size - 1].currCount > 0){
        if(data[size - 1].currCount === 1){
          if(size == 1)data = null;
          else data.pop();
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
    var size;
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
      size = Object.keys(newData).length;
    }
    if(newData == null){
      newData = [];
      newData.push(dataToBeSaved);
    }
    else if(newData[size - 1].dateNo === nowDate){
      newData[size - 1].time.push(this.state.time);
      newData[size - 1].currCount = newData[size - 1].currCount + 1;
      if(newData[size - 1].currCount == 10)this.Show_Custom_Alert(true);
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
    let realData = JSON.parse(rawData);
    if(realData != null){
      var size = Object.keys(realData).length;
      var nowDate = new Date().getDate();
      if(realData[size - 1].currCount > 0 && realData[size - 1].dateNo == nowDate){
        this.setState({thisCount:String(realData[size - 1].currCount)});
      }
      else this.setState({thisCount:'0'});
    }
    else this.setState({thisCount:'0'});
  }
}

export default Home;