import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground, Modal, Alert} from 'react-native';
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
    if(this.checkNoti())this.createDiaryNoti();
  }
  render() {
    let alertMessage = "ลูกในท้องมีสุขภาพอยู่ในเกณฑ์ปกติ\nมีพัฒนาการ การเจริญเติบโตที่ดี";
    let ok = "ตกลง";
    let infoHeader = "วิธีการใช้งาน";
    let infoMessage = "กดปุ่มตรงกลางหน้าจอ 1 ครั้ง เมื่อลูกดิ้น ถ้าหากกดผิดสามารถกดปุ่ม \"ลบ 1\" ได้\n";
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.Alert_Visibility}
          transparent={true}
          animationType={"fade"}
          onRequestClose={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)}}>
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.Alert_Main_View}>
                  <View style={{height: '75%',width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('./img/Smile.png')} style={{width: 100, height: 100}}/>
                    <Text style={styles.Alert_Message}>{alertMessage}</Text>
                  </View>
                  <View style={{height: '25%',width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 15}}>
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
              <View style={styles.Info_Main_View}>
                  <View style={{height: '15%', width:'100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.infoHeader}>{infoHeader}</Text>
                  </View>
                  <View style={{height: '60%',width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.Alert_Message}>{infoMessage}</Text>
                    <Image source={require('./img/Info.png')} style={{width: 100, height: 100}}/>
                  </View>
                  <View style={{height: '25%',width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 15}}>
                    <TouchableOpacity
                      style={styles.infoButtonStyle}
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
      </View>
    );
  }
  checkNoti(){
    let len = Notification.getIDs().then(function(ids){
      return ids.length;
    });
    return len;
  }
  createDiaryNoti(){
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    if(hour + 12 >= 24){
      hour = 23;
      minute = 59;
    }
    else hour += 12;
    Notification.create({
      id: 1,
      subject: 'คำเตือน!!',
      message: 'ลูกของคุณดิ้นไม่ถึง 10 ครั้ง ใน 12 ชั่วโมง',
      sendAt: new Date(year, month, date, hour, minute),
      repeatEvery: 'day',
      repeatCount: 300
    });
  }
  createHalfHourNoti(){
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    if((minute + 30) / 60){
      if(hour < 23)hour++;
      else hour = 23;
    }
    minute = (minute + 30) % 60;
    Notification.create({
      id: 2,
      subject: 'คำเตือน!!',
      message: 'ลูกของคุณดิ้นไม่ถึง 10 ครั้ง ใน 30 นาที ให้นับต่อไปจนครบ 12 ชั่วโมง',
      sendAt: new Date(year, month, date, hour, minute)
    });
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
          Notification.deleteAll();
          this.createDiaryNoti();
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
    if(date < 10)date = '0' + date;
    if(month < 10)month = '0' + month;
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
    if(nowDate < 10)nowDate = '0' + nowDate;
    const dataToBeSaved = {
      currCount : 1,
      date : this.state.date,
      dateNo : nowDate,
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
      Notification.deleteAll();
      this.createDiaryNoti();
      this.createHalfHourNoti();
    }
    else if(newData[size - 1].dateNo === nowDate){
      newData[size - 1].time.push(this.state.time);
      newData[size - 1].currCount = newData[size - 1].currCount + 1;
      if(newData[size - 1].currCount == 10){
        this.Show_Custom_Alert(true);
        Notification.deleteAll();
      }
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