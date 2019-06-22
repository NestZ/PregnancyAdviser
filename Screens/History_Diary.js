import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

dateList = [
    {
      id : 1,
      date : "12/01/61",
      count : 8
    },
    {
      id : 2,
      date : "5/8/61",
      count : 12
    },
    {
      id : 3,
      date : "15/9/61",
      count : 5
    }
];
  
const styles = StyleSheet.create({
    date:{
      color : 'black',
      fontSize: 30,
      textAlign: 'left'
    },
    freq:{
      color : 'red',
      fontSize : 30,
      textAlign: 'right'
    }
})

function renderDate(navigate){
    const dateArr = dateList.map((buttonInfo) => {
        return  <TouchableOpacity key={buttonInfo.id} onPress={() => navigate('History_Hourly',{count:buttonInfo.date})}>
                    <Text style={styles.date}>{buttonInfo.date}</Text><Text style={styles.freq}>{buttonInfo.count}</Text>
                </TouchableOpacity>
    });
    return dateArr;
}
  
class History_Diary extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        {renderDate(navigate)}
      </View>
    );
  }
}

export default History_Diary;