import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Details2 extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
    <Text>
      <Text>Details2</Text>
    </Text>
  );
  }
}

export default Details2;