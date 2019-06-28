import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import List from './H_Diary_S';

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

class History_Diary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: '',
      counter : 0,
      listArr: []
    }
    this.getDateList();
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  componentDidMount(){
    this.addList.bind(this);
    this.props.navigation.addListener('willFocus',this.addList.bind(this));
  }
  render(){
    const {navigate} = this.props.navigation;
    if(this.state.listArr == null)this.state.listArr = [];
    let dateList = this.state.listArr.map((val,key) => {
      return <TouchableOpacity key={key} onPress={() => navigate('History_Hourly',{Index:key})}><List keyval={key} val={val}></List></TouchableOpacity>
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>History</Text>
        </View>
        <TouchableOpacity onPress={() => AsyncStorage.removeItem('timedata')}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollContainer}>
          {dateList}
        </ScrollView>
      </View>
    );
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