import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

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

class H_Hourly_S extends React.Component{
  render(){
    return (
        <View key={this.props.keyval} style={styles.list}>
            <Text style={styles.date}>{this.props.val}</Text>
        </View>
    );
  }
}

export default H_Hourly_S;