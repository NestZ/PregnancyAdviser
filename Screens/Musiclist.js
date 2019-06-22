import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Musiclist extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render() {
  const {navigate} = this.props.navigation;
  return (
    <Text>
      <Text>My Musiclist</Text>
    </Text>
  );
  }
}

export default Musiclist;