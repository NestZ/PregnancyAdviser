import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
      flex: 1,
      marginBottom : 120
    },
})

class History_Hourly extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timeArr : [],
      currIndex : 0
    }
    const { navigation } = this.props;
    this.state.currIndex = navigation.getParam('Index','-1');
    this.setArr(this.state.currIndex);
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  componentDidMount(){
    this.updateArr.bind(this);
    this.props.navigation.addListener('willFocus',this.updateArr.bind(this));
  }
  render(){
    let timeList = this.state.timeArr.map((val,key) =>{
      return <List key={key} keyval={key} val={val}></List>
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Date</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {timeList}
        </ScrollView>
        <View>

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