import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Details1 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
    <Text>
      <Text>My Details1</Text>
    </Text>
  );
  }
}

export default Details1;