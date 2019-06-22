import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

class History_Hourly extends React.Component{
    static navigationOptions = ({ navigation }) => {
      return {
         header: () => null
      } 
    }
    render() {
    const {navigation} = this.props;
    const id = navigation.getParam('count','-1');
    return (
      <Text>
        <Text>Hourly{id}</Text>
      </Text>
    );
    }
}

export default History_Hourly;