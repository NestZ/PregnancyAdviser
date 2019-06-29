import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';

export default class homedetails extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <Button title='Details1' color="#FFCCFF" accessibilityLabel="Learnmore dfghjkl;" onPress={()=>navigate('Details1')}>
          </Button>
          <Button title='Details2' color="#FFCCCC" onPress={()=>navigate('Details2')}>
          </Button>
          <Button title='Details2' color="#FFCCCC" onPress={()=>navigate('Details3')}>
          </Button>
          <Button title='Details2' color="#FFCCCC" onPress={()=>navigate('Details4')}>
          </Button>
        </View>
    );
  }
}