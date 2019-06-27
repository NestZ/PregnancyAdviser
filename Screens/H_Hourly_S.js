import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
    list:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    date:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    count:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    }
});

class test extends React.Component{
  render(){
    return (
        <View key={this.props.keyval} style={styles.list}>
            <Text style={styles.date}>{this.props.val.date}</Text>
            <Text style={styles.count}>{this.props.val.count}</Text>
        </View>
    );
  }
}

export default test;