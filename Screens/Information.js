import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Alert, AppRegistry } from 'react-native';

export default class Informationnavigator extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title='Detail' color="#FFCCFF" onPress={()=>navigate('Musiclist')}>
        </Button>
        <Button title='Music' color="#FFCCCC" onPress={()=>{Alert.alert("ยังไม่มีเพลง")}}>
        </Button>
        <Button title='etc1' color="#FFCC99" onPress={()=>{Alert.alert("etc1")}}>
        </Button>
        <Button title='etc2' color="#FFCC66" onPress={()=>{Alert.alert("etc2")}}>
        </Button>
      </View>
    );
  }
}
