import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import List from './H_Diary_S';
import styles from './styles';

class History_Diary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: '',
      counter : 0,
      listArr : []
    }
    this.getDateList();
    this.addList.bind(this);
    this.props.navigation.addListener('didFocus',this.addList.bind(this));
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render(){
    const {navigate} = this.props.navigation;
    if(this.state.listArr == null)this.state.listArr = [];
    let dateList = this.state.listArr.map((val,key) => {
      return <TouchableOpacity key={key} onPress={() => navigate('History_Hourly',{Index:key})}><List keyval={key} val={val}></List></TouchableOpacity>
    });
    return (
      <View style={styles.diaryContainer}>
        <View style={styles.diaryHeader}>
          <Text style={styles.diaryHeaderText}>History</Text>
        </View>
        <View style={styles.nullList}>
          {this.checkNullList()}
        </View>
        <ScrollView style={styles.diaryScrollContainer}>
          {dateList}
        </ScrollView>
      </View>
    );
  }
  checkNullList(){
    if(Object.keys(this.state.listArr).length == 0){
      return (<Text style={styles.nullListText}>- Doesn't have History yet -</Text>);
    }
    else return null;
  }
  addList = async() => {
    this.getDateList();
    this.setState({listArr:this.state.listArr});
  }
  getDateList = async() => {
    var newData = await this.getDataWithKey('timedata');
    this.setState({listArr:newData});
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

export default History_Diary;