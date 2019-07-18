import {StyleSheet, Text, View, Image} from 'react-native';
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
        fontSize: 15,
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    count:{
        fontSize: 17,
        color: 'white'
    },
    arrow:{
        width: 25,
        height: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 19,
        bottom: 1,
        right: 10,
        tintColor: 'gray'
    },
    badge:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 25,
        backgroundColor: '#E91E63',
        borderRadius: 50,
        padding: 10,
        top: 19,
        bottom: 1,
        right: 60
    }
});

class H_Diary_S extends React.Component{
  render(){
    return (
        <View key={this.props.keyval} style={styles.list}>
            <Text style={styles.date}>{this.props.val.date}</Text>
            <View style={styles.badge}>
                <Text style={styles.count}>{this.props.val.currCount}</Text>
            </View>
            <Image style={styles.arrow} source={require('./img/rightArrow.png')} />
        </View>
    );
  }
}

export default H_Diary_S;